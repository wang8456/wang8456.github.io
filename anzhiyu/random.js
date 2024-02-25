var posts=["posts/c0a9.html","posts/df9c.html","posts/635a.html","posts/bf8s.html","posts/cabd.html","posts/6f9.html","posts/9b31.html","posts/f0e2.html","posts/bf8f.html","posts/8e5d.html","posts/2215.html","posts/9743.html","posts/129b.html","posts/7af8.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };