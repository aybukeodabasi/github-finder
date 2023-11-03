export class Github {
  // istek atmak için gerekli olan bilgiler
  constructor() {
    this.client_id = "ad7e6a7fbc67beb431d1";
    this.client_secret = "c9605b635ea16495d7c80a0eeadfe06fd1d9479d";
    this.per_page = 10;
    this.dort = "asc";
  }

  // apidan kullanıcı bilgilerini alma

  async fetchUserData(username) {
    // parametre olarak gelen kullanıcı ismine göre istek attık
    const profileRes = await fetch(
      `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    // kullanıcının projelerini alma

    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&sort=${this.sort}&per_page=${this.per_page}`
    );

    // gelen cevabı JSON verisine çevirme
    const data = await profileRes.json();
    const repos = await repoRes.json();

    // fonksiyonun çağrıldığı yere bilgilerini gönderme

    return { data, repos };
  }
}
