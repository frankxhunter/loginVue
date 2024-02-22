<template>
    <div>
        <h1>The Main Pageg</h1>
        <hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores, aut autem, blanditiis consequuntur
            dolore excepturi laborum maiores minima nihil non nulla obcaecati quas quibusdam quod sed suscipit vero
            voluptatem.</p>

    </div>
</template>

<script>
export default {
    created(){
        if(localStorage.getItem("token")=== null){
            console.log("no hay token available")
            this.$router.push({name: "register"})
            
        }
        else{
            console.log(localStorage.getItem("token"));
            this.$axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('token')}`;
            //this.$router.push({name: "main"})

        }
    }
}
</script>

