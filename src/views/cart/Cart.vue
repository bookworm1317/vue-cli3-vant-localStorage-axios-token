<template>
  <h2>购物车</h2>
</template>

<script>
  export default {
    name: "Cart",
		created() {
			console.log(localStorage.getItem('user-access-token'))
		}
  }
</script>

<style scoped>

</style>
