<template>
  <div>
    <div @click="$router.push({ name: 'NewBookmark' })" class="btn btn-primary">
      Yeni Ekle
    </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Başlık</th>
          <th scope="col">URL</th>
          <th scope="col">Açıklama</th>
          <th scope="col">Sil</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in bookmarkList" :key="item.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.title }}</td>
          <td>
            <a :href="item.url" target="_blank">{{ item.url }}</a>
          </td>
          <td>{{ item.description }}</td>
          <td>
            <div @click="onDelete(item.id)" class="btn btn-danger">Sil</div>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="text-center fs-5 text-danger"
      v-if="this.bookmarkList.length == 0"
    >
      Hiç içerik yok..
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookmarkList: [],
    };
  },
  created() {
    this.$axios
      .get("http://localhost:3000/bookmarks")
      .then((res) => (this.bookmarkList = res.data || []));
  },
  methods: {
    onDelete(id) {
      this.$axios.delete(`http://localhost:3000/bookmarks/${id}`);
      this.bookmarkList = this.bookmarkList.filter((item) => item.id != id);
    },
  },
};
</script>
