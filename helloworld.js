// IMPORT STUFF
const http = require('http');

// OTHER REQUIREMENTS
const hostname = "127.0.0.1";
const port = 3000;


// CREATE THE SERVER 
//res.end() sends the response whatever we inclue inside ()
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Neon Site</title>
        <style>
            * {
            color: aliceblue;
            background-color: black;
            margin: 0px;
            padding: 0px;
            font-weight: 0;
        }
        
        .container {
            display: flex;
            flex-wrap:wrap ;
            width: 80rem;
        }
        
        .navbar {
            justify-self: flex-start;
            align-self:flex-start;
        
            display: flex;
        
            align-items: center;
            justify-items: center;
            border: 2px solid green;
            /* border-radius: 3px; */
        }
        
        ul {
            display: flex;
        
            list-style: none;
        }
        
        .btn {
            margin: 0.5rem;
        padding: 5px;
            cursor: pointer;
        
            border: 2px solid blue;
            border-radius: 1rem;
            background-color: black;
            color: aliceblue;
        
        }
        
        .navbar ul li:hover {
            color: rgb(249, 255, 68);
            border: 2px solid blue;
            box-shadow: 0px 3px 8px 1px cyan;
        
        }
        
        .sbar {
            margin-left: auto ;
            justify-self: flex-start;
            align-self:flex-start;
            
            display: flex;
        
            align-items: center;
            justify-items: center;
            border: 2px solid yellow;
            padding: 8px;
            border-radius: 5px;
        
        }
        #sbox{
            color: white;
            border: 1px solid red;
            margin: 5px;
        }
        #sbtn {
            cursor: pointer;
            padding: 4px;
        
            border: 2px solid blue;
            border-radius: 0.5rem;
            background-color: black;
            color: aliceblue;
        }
        #sbtn:hover {
            color: aliceblue;
            border: 2px solid blue;
            box-shadow: 0px 3px 8px 1px rgb(237, 33, 248);
        
        }
        
        #writing{
            margin-top: 10px;
            padding: 2rem;
            border: 4px solid rgb(222, 0, 0);
            /* border-radius: 10px; */
        }
        #writing p{
            color:cyan ;
        } </style>

    
    </head>
    <body>
        <div class="container">
            <div class="navbar">
                <ul>
                    <li class="btn"  >Home</li>
                    <li class="btn">Services</li>
                    <li class="btn">Complains</li>
                    <li class="btn">About</li>
                    <li class="btn">Contact Us</li>
                </ul>
            </div>
    
            <div class="sbar">
                <input type="text" name="search" id="sbox" placeholder="Search here">
                <button class="sbaar" id="sbtn">Search</button>
            </div>
    
        </div>
        <div id="writing" >
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aspernatur ab illo minima optio! Officiis corporis repellendus recusandae ipsa esse sunt dignissimos consectetur quisquam mollitia autem nihil aperiam, eligendi fuga earum iste ad in quasi pariatur eius tempore corrupti cum. Itaque quod in voluptates cupiditate laboriosam corrupti iusto aspernatur quaerat maxime numquam earum eligendi accusamus facilis, officia optio hic ut. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates atque fugit sed qui, laboriosam eligendi pariatur fugiat? Iste, maiores ipsum! Possimus necessitatibus, aliquid consequatur quasi cupiditate fugiat quod dolor vitae totam unde aspernatur? Officiis consequatur itaque corporis officia, repudiandae quis nisi rem nihil tempore voluptatibus placeat eum impedit suscipit in quasi! Odit velit nisi repellat quaerat ipsum aut adipisci tempora eum suscipit voluptas ipsam, accusamus laboriosam perspiciatis doloribus. Ipsum dolores vitae ea excepturi earum nostrum natus inventore, perspiciatis repellat debitis consequatur! Sed enim iste facere voluptatum numquam, et corrupti modi, vitae laborum, quibusdam est harum animi maxime quaerat aliquid. Molestiae.</p>
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam ad ipsa quo reprehenderit sed! Repellendus, nam qui placeat facilis, hic voluptatum expedita asperiores perspiciatis quas, tempore enim. Voluptas odit pariatur eaque accusantium aliquam totam itaque officia dolorum odio quam porro repudiandae sint quis laboriosam qui quod modi inventore perspiciatis mollitia, veniam laborum nam eius deleniti omnis. Velit temporibus sed atque cum reprehenderit, voluptas debitis numquam perferendis similique dicta aspernatur officiis enim esse explicabo cupiditate, culpa nam ab molestias odio magnam. Blanditiis illum aut harum sit reprehenderit quos tempore laudantium perspiciatis alias dicta! Libero, numquam nam suscipit tempore consectetur eveniet?
           </p>
        </div>
    
        
    </body>
    </html>`)
});

//START THE SERVER
server.listen(port,hostname, ()=> { console.log(`Sever running at http:// ${hostname}:${port}`) });

