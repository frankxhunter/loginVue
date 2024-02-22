<template>
    <div>
        <h1>The Main Page</h1>
        <hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores, aut autem, blanditiis consequuntur
            dolore excepturi laborum maiores minima nihil non nulla obcaecati quas quibusdam quod sed suscipit vero
            voluptatem.</p>

        <button @click="goChat">Go to chat</button>
        <br />
        <button @click="testToken">Test token</button>

    </div>
</template>

<script>
export default {
    methods:{
        goChat(){
            this.$router.push({name: 'chat'})
         
        },
        testToken(){
            this.$axios.get('/api/users/1').then((response)=>{
                console.log(response);
            }).catch((error)=>{
                console.log(error);
            })
        }
    }
}
</script>