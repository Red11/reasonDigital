<template>
    <div class="hero" :style="'background-image: url(' + image + ');'">
        <div class="container">
            <div class="title">{{ title }}</div>
            <div class="content">
                <p>{{ content }}</p>
            </div>
            <a href="" class="button is-danger is-light is-rounded">Get involved now!</a>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Hero',
  data () {
    return {
        image: require('@/assets/img/1920x600.png'),
        title: "Get online week 2021",   
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  }
}
</script>

<style lang="scss">
$primary: #327285;
$link: #2c786a;
$danger: #cd204a;

.hero {
	@media (max-width: 39.938rem) {
		background-size: contain;
		background-repeat: no-repeat;
		padding-top: 34vw;
	}

	@media (min-width: 40rem) {
		background-size: cover;
		padding-top: 5vw;
		padding-bottom: 5vw;
	}

	.title {
		display: inline-flex;
		font-size: 1.5rem;
		background: $primary;
		color: white;
		padding: 1rem;
		margin-bottom: 1rem;

		@media (min-width: 40rem) and (max-width: 79.938rem) {
			font-size: 2rem;
		}

		@media (min-width: 80rem) {
			font-size: 4rem;
		}
	}

	.content {
		font-size: 1.2rem;
		background: white;
		color: $link;
		padding: 1rem;
		margin-bottom: 1rem;

		@media (min-width: 40rem) {
			max-width: 37.5rem;
		}
	}
}
</style>