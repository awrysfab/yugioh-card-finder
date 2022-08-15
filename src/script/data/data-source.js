class DataSource {
  static searchCard(keyword) {
    return fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${keyword}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.data) {
          return Promise.resolve(responseJson.data);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
