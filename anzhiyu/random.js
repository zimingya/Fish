var posts=["2025/04/13/newb-og/","2025/04/13/hello-world/","2025/04/13/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };