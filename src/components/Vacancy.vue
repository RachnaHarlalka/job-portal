<template>
    <div>
        <div class="card my-4">
            <h1 class="my-2">{{vacancy.title}}</h1>
            <h4>{{vacancy.company}}</h4>
            <h4>{{vacancy.city}}</h4>
            <p class="my-2">{{vacancy.description}}</p>
            <div class="flex justify-between">
                <button @click="applyVacancy(vacancy)" class="text-white bg-black px-4 py-1 rounded">Apply</button>
                <button @click="deleteVacancy(vacancy)" class="text-white bg-red-700 px-4 py-1 rounded ">Delete</button>
            </div>            
        </div>
    </div>
</template>

<script>
    export default {
        data()
        {

        },
        props:{
            vacancy:{
                type:Object,
                required:true
            }
        },
        methods:{
            deleteVacancy(vacancy){
                this.$emit('delete', vacancy.id);  
            },
            
            applyVacancy(vacancy){
                window.alert(`Applied successfully for ${vacancy.title}`);
            }
        }
        
    }
</script>

<style scoped>

</style>