<template>
  

   <table id="tblSupplier" class="table">

      
      <tbody v-for="post in posts" :key="post.CUSTOMERID">
          <tr>
              <td>{{ post.CUSTOMERID }}</td>
              <td>{{ post.FIRSTNAME }}</td>
               <td class="action">
                <button type="button" name="excluir" @click="deleteCustomer(post.CUSTOMERID)">Excluir</button>
            </td>
            
          </tr>
 
      </tbody>
      

    </table>


</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      posts: []
    }
  },
  methods: {
    deleteCustomer(id){
        axios.delete(`http://localhost:8020/user/`+id)
        .then(response => {
          // JSON responses are automatically parsed.
          alert("excluido:"+response.data)
          this.posts = this.getCustomer();
        })
        .catch(e => {
          this.errors.push(e)
        })
     
    },
    getCustomer(){
          axios.get(`http://localhost:8020/user`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  
  // Fetches posts when the component is created.
  created() {
    axios.get(`http://localhost:8020/user`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

  }
}
</script>