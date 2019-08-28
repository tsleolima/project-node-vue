<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Vue Axios Post - ItSolutionStuff.com</div>
    
                    <div class="card-body">
                        <form @submit="formSubmit">
                        <strong>FirstName:</strong>
                        <input type="text" class="form-control" v-model="firstname">
                        <strong>MiddleName:</strong>
                        <input type="text" class="form-control" v-model="middlename">
                        <strong>LastName:</strong>
                        <input type="text" class="form-control" v-model="lastname">
                        <strong>CityId:</strong>
                        <input type="number" class="form-control" v-model="cityid">
                        <strong>Zip:</strong>
                        <input type="text" class="form-control" v-model="zip">
                        <strong>Country:</strong>
                        <input type="text" class="form-control" v-model="country">
                        <strong>Phone:</strong>
                        <input type="text" class="form-control" v-model="phone">
                        <strong>Email:</strong>
                        <input type="text" class="form-control" v-model="email">
                        <strong>Notes:</strong>
                        <input type="text" class="form-control" v-model="notes">                          
                        <button class="btn btn-success">Submit</button>
                        </form>
                        <strong>Output:</strong>
                        <pre>
                        {{output}}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
     
<script>

    import axios from 'axios';

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
              firstname: '',
              middlename: '',
              lastname: '',
              cityid: 0,
              zip: '',
              country: '',
              phone: '',
              email: '',
              notes: '',
              output: ''
            };
        },
        methods: {
            formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                console.log(this.firstname)
                axios.post('http://localhost:8020/user', {
                    FIRSTNAME: this.firstname,
                    MIDDLENAME: this.middlename,
                    LASTNAME: this.lastname,
                    CITYID: this.cityid,
                    ZIP: this.zip,
                    COUNTRY: this.country,
                    PHONE: this.phone,
                    EMAIL: this.email,
                    NOTES: this.notes,
                    STATUS: true
                })
                .then(function (response) {
                    currentObj.output = response.data;
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
            }
        }
    }
</script>
