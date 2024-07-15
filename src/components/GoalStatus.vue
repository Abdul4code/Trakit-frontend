<script setup>
    const props = defineProps({
        status_id : Number,
        status_key: Number,
        status_item : Object
    })

    const emits = defineEmits(['move_status', 'set_dragged_item'])

    function dragStatus(event, id){
        const dragImage = new Image();
        dragImage.src = "/src/assets/images/move_status.svg";
        event.dataTransfer.setDragImage(dragImage, 10, 10);
        event.dataTransfer.setData('status_id', id)
        event.dataTransfer.effectAllowed = 'move'
        event.dataTransfer.dropEffect = "move"
       emits('set_dragged_item', id)
    }

    function dragStatusEnter(event) {
        if (event.dataTransfer.types.includes("status_id")) {
            event.preventDefault();
            event.target.classList.add('dropable');
        }
    }

    function dragStatusLeave(event){
        event.target.classList.remove('dropable')
    }

    function dragStatusOver(event){
        if(event.dataTransfer.types.includes('status_id')){
            event.preventDefault()
        }
    }

    function dropStatus(event) {
        emits('move_status', event)
        event.target.classList.remove('dropable')
    }

</script>

<template>
    <div 
        :id = "props.status_id"
        :key = "props.status_key" 
        class="status"
        draggable="true"
        @dragstart="dragStatus($event, props.status_id)"
        @dragenter="dragStatusEnter($event)"
        @dragleave="dragStatusLeave($event)"
        @dragover="dragStatusOver($event)"
        @drop="dropStatus($event)"
    > 
        {{ status_item.title }}
    </div>
</template>
<style>

</style>