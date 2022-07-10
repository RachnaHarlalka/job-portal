<template>
    <div class="card my-6">
        <h1>Create a vacancy</h1>
        <!-- .prevent is used to  prevent thr page from refresh -->
        <form action="" @submit.prevent="formSubmit">
            <input v-model="form.title" class="input" type="text" placeholder="Job title" required>
            <input v-model="form.company" class="input" type="text" placeholder="Company name" required>
            <input v-model="form.city" class="input" type="text" placeholder="City name" required>
            <textarea v-model="form.description" class="input" name="" id="" cols="30" rows="10" placeholder="Job description" required></textarea>
            <button class="text-white bg-black px-6 py-2 rounded my-3  ">Create</button>


        </form>
    </div>
</template>

<script>
    export default {
        methods:
        {
            formSubmit(){
                this.$emit('formSubmit',{...this.form, id: new Date().getTime().toString()});
                for(let key in this.form){
                    this.form[key]='';
                }

            }
        },
        data()
        {
            return{
                form:{
                    title:"",
                    company:"",
                    city:"",
                    description:""
                }
            }
        }
        
    }
</script>

<style scoped>

.input{
    display: block;
    border: 0.5px solid rgb(196, 183, 183);
    margin-top: 5px;
    padding: 3px;
    width: 100%;
}
</style>