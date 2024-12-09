<template>
    <div class="history">
        <!-- 按日期分组显示历史记录 -->
        <div v-for="group in groupedDialogues" :key="group.date">
            <div class="history-title">{{ group.date }}</div>
            <div v-for="dialogue in group.items" :key="dialogue.id" class="history-item"
                :style="{ 'background': dialogue.id === currentEditingId ? '#e8e8e8' : '' }"
                @click="handleDialogueClick(dialogue.id)">
                <div class="history-item-text">{{ dialogue.title }}</div>
                <el-popover placement="right" :width="0" trigger="click">
                    <template #reference>
                        <img class="dots-icon" :class="{ 'active': dialogue.id === currentEditingId }"
                            src="@/assets/img/chat/dots.svg">
                    </template>
                    <template #default>
                        <div class="edit-item" @click.stop="handleRename(dialogue)">
                            <img src="@/assets/img/chat/pencil.svg">
                            <span style="margin-left: 5px;">重命名</span>
                        </div>
                        <el-popconfirm
                            confirm-button-text="确定"
                            cancel-button-text="取消"
                            :icon="InfoFilled"
                            icon-color="#626AEF"
                            title="确定删除这条记录吗？"
                            confirm-button-type="danger"
                            cancel-button-type="info"
                            width="220"
                            @confirm="handleDelete(dialogue.id)"
                        >
                            <template #reference>
                                <div class="edit-item">
                                    <img src="@/assets/img/chat/delete.svg">
                                    <span style="margin-left: 5px;color: #D70101;">删除</span>
                                </div>
                            </template>
                        </el-popconfirm>

                    </template>
                </el-popover>
            </div>
        </div>
        <el-dialog
            v-model="renameDialogVisible"
            title="重命名对话"
            width="400"
            :show-close="false"
            :close-on-click-modal="false"
        >
            <el-input
                v-model="newTitle"
                placeholder="请输入新的标题"
                maxlength="50"
                show-word-limit
                @keyup.enter="confirmRename"
            />
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="renameDialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="confirmRename">确定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useDialogueStore } from '@/stores/dialogueStore';
import { storeToRefs } from 'pinia';
import { InfoFilled } from '@element-plus/icons-vue'

const dialogueStore = useDialogueStore();
const { savedDialogues, currentEditingId } = storeToRefs(dialogueStore);

// 按日期对对话记录进行分组
const groupedDialogues = computed(() => {
    const groups = {};
    savedDialogues.value.forEach(dialogue => {
        const date = new Date(dialogue.updatedAt);
        const today = new Date();
        let dateStr;

        if (date.toDateString() === today.toDateString()) {
            dateStr = '今天';
        } else if (date.getFullYear() === today.getFullYear()) {
            dateStr = `${date.getMonth() + 1}月${date.getDate()}日`;
        } else {
            dateStr = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
        }

        if (!groups[dateStr]) {
            groups[dateStr] = {
                date: dateStr,
                items: []
            };
        }
        groups[dateStr].items.push(dialogue);
    });
    return Object.values(groups);
});

// 处理点击对话记录
const handleDialogueClick = (id) => {
    dialogueStore.loadSavedDialogue(id);
    const index = savedDialogues.value.findIndex(d => d.id === id);
    console.log(savedDialogues.value[index].title);
};

// 处理删除对话记录
const handleDelete = (id) => {
    dialogueStore.deleteSavedDialogue(id);
};

// 重命名相关的响应式变量
const renameDialogVisible = ref(false);
const newTitle = ref('');
const currentDialogue = ref(null);

// 处理重命名
const handleRename = (dialogue) => {
    currentDialogue.value = dialogue;
    newTitle.value = dialogue.title;
    renameDialogVisible.value = true;
};

// 确认重命名
const confirmRename = () => {
    if (newTitle.value.trim()) {
        dialogueStore.renameSavedDialogue(currentDialogue.value.id, newTitle.value.trim());
        renameDialogVisible.value = false;
    }
};
</script>

<style>
.history {
    width: 88%;
    margin: 20px auto;
    overflow: auto;
    /* 隐藏滚动条 */
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.history-title {
    font-size: 14px;
    color: #000;
    font-weight: bold;
    margin: 5px;
    margin-top: 20px;
}

.history-item {
    margin-top: 10px;
    padding: 10px 10px 10px 20px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    cursor: pointer;
}

.history-item:hover {
    background: #e8e8e8;
}

.history-item-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.history-item .dots-icon {
    opacity: 0;
    transition: opacity 0.2s ease;
}

.history-item:hover .dots-icon,
.history-item .dots-icon.active {
    opacity: 1;
}

.edit-item {
    width: 65px;
    margin: 5px;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;

}

.edit-item:hover {
    background: #f1f1f1;
}

.el-popover.el-popper {
    min-width: 0 !important;
    padding: 2px;
    border-radius: 10px;
}

.el-popconfirm__main {
    margin: 8px 10px;
    font-size: 14px;
    color: #333;
}

.el-popconfirm__action {
    display: flex;
    justify-content: center;
    gap: 8px;
}

.el-button--danger {
    background-color: #3B82F6 !important;
    border-color: #3B82F6 !important;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 14px;
}

.el-button--info {
    background-color: #F3F4F6 !important;
    border-color: #E5E7EB !important;
    color: #374151 !important;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 14px;
}

.el-popconfirm {
    padding: 16px;
    border-radius: 8px;
}

.dialog-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
}

.el-dialog {
    border-radius: 20px;
}

.el-dialog__header {
    margin: 0;
    padding: 20px 20px 10px;
    text-align: center;
    font-weight: bold;
}

.el-dialog__body {
    padding: 20px;
}

.el-input {
    margin-top: 10px;
}
</style>
