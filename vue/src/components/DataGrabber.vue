<template>
  <div class="dataGrabber">
    <button @click="callJSONPlaceholder">Get Data</button>
    <table v-if="apiData.length > 0">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in apiData" :key="index">
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DataGrabber",
  data: () => {
    return {
      apiData: [],
    };
  },
  methods: {
    callJSONPlaceholder() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => (this.apiData = data));
    },
  },
};
</script>
