<template>
  <Layout>
    <div>Hello {{ value }}</div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!',
  },
  data() {
    return {
      value: 'World',
    };
  },
};
</script>
