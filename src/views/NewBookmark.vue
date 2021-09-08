<template>
  <div class="row justify-content-center mt-4">
    <div class="form-area card border p-2">
      <div class="mb-3">
        <label for="title" class="form-label">Başlık</label>
        <input
          id="title"
          placeholder="Lütfen başlık giriniz."
          type="text"
          class="form-control"
          v-model="userData.title"
        />
      </div>
      <div class="mb-3">
        <label for="url" class="form-label">URL</label>
        <input
          id="url"
          type="text"
          class="form-control"
          placeholder="URL girin."
          v-model="userData.url"
        />
      </div>
      <div class="mb-3">
        <label for="url" class="form-label">Açıklama</label>
        <textarea
          class="form-control"
          id="description"
          rows="3"
          placeholder="Açıklama girin."
          v-model="userData.description"
        ></textarea>
      </div>
    </div>
    <div class="mt-3">
      <div @click="onSave" class="btn btn-primary me-1">Kaydet</div>
      <div
        @click="$router.push({ name: 'HomePage' })"
        class="btn btn-secondary "
      >
        İptal
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        title: null,
        url: null,
        description: null,
      },
    };
  },
  methods: {
    onSave() {
      console.log(this.userData);
      this.$axios
        .post("http://localhost:3000/bookmarks", this.userData)
        .then((save_response) => {
          console.log("save_response", save_response);
          this.resetData();
          this.$router.push("/");
        });
    },
    resetData() {
      Object.keys(this.userData).forEach((key) => this.userData[key] == null);
    },
  },
};
</script>
