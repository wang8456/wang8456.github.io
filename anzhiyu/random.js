var posts=["posts/3de3.html","posts/9b31.html","posts/8e5d.html","posts/635a.html","posts/bf8f.html","posts/129b.html","posts/f0e2.html","posts/7af8.html","posts/2215.html","posts/9743.html","posts/697.html","posts/c0a9.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};