export default class BikeService {
  static getStolen(zip) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://bikeindex.org:443/api/v3/search/count?location=${zip}&distance=5&stolenness=stolen`;
      request.addEventListener("loadend", function(){
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve(response);
        } else {
          reject(this);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}