Уг төсөлийг React-н шинэ апп үүсгэх [Create React App](https://github.com/facebook/create-react-app). коммандаар үүсгэсэн. 

1. Зорилго
Хэрэглэгч логин хийж, шинээр пост үүсгэх, үүсгэсэн постыг унших, устгах, засах. Мөн буцаж гарах үйлдлүүдийг хэрхэн хийхийг сурах. 

2. Бүтэц
Зураг дээрээс харна уу.

3. Хэрхэн ажиллуулах вэ?
Зөвхөн Риакт апп ажиллуулахын тулд npm start команд өгнө.
Бүрэн ажиллуулахын тулд:
  1. Back-end API бэлдэнэ. энэ линкний дагуу, эсвэл үүнтэй ижил https://github.com/Ochirpurev20/blog2backend
  2. nginx server /nginx-1.19.0/ суулгаж тохиргоог дараах зааврын дагуу бэлдэнэ. 
  Ингэснээр cors-той холбоотой алдаа асуудал үүсэхгүй болно. илүү ихийг ==> /https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/ 
  server {
       listen       80;
       server_name  blog.mn;// таны домэйн

       location / {
           proxy_pass http://localhost:3000; //риакт апп-н ажиллах хост:порт
           #index  index.html index.htm;
       }

       location /api {
           proxy_pass http://localhost:5501; //API ажиллах хост: порт
       }
    }
    
  3. npm start команд өгч апп аа ажиллуулна. 
