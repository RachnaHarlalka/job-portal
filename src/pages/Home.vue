<template>
   <div class="container">
     <section class="hero m-8 px-8">
        <div class="hero-body">
            <p class="title">
                Find your dream job today
            </p>
            <p class="subtitle">
                Apply for any vacancie below
            </p>
        </div>
        <NewVacancy @formSubmit="handleSubmit"/>
        
        <Vacancy v-for="vacancy in vacancies" :key="vacancy.id" :vacancy="vacancy" @delete="deleteVacancy"/>
    </section>
   </div>
</template>

<script>
import NewVacancy from '../components/NewVacancy.vue'
import Vacancy from '../components/Vacancy.vue'
import {vacancies} from '../../data'
    export default {
        components:
        {
            NewVacancy,
            Vacancy
        },
        data(){
            return{
                vacancies
            }
        },
        methods:{
            handleSubmit(formData){
                console.log(formData);
                this.vacancies.unshift(formData);

                // unshift adds data to the starting of an array
                //push adds data to the end of the array
            },
            deleteVacancy(vacancyId)
            {
                this.vacancies=this.vacancies.filter(vacancy=>vacancy.id!==vacancyId);
            }
        }
    }
</script>

<style scoped>

.title
{
    font-size: 30px;
    font-weight: 500;
}
</style>