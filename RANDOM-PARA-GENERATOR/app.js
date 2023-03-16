const text = [
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, libero aspernatur ab tenetur consequuntur recusandae incidunt illo saepe voluptates voluptas ut dicta inventore a ullam quas dolorum. Sit laboriosam magnam eos deleniti totam ex dignissimos voluptate pariatur. Deleniti, excepturi aliquid quos incidunt cumque obcaecati tempore quia veritatis harum quaerat illo perferendis alias ducimus vitae dolorem vel necessitatibus ut iste voluptatibus eius? Cum odio pariatur, quaerat enim eveniet sit, repellendus similique facere autem eligendi unde ducimus aperiam possimus, recusandae in! Porro laborum, culpa est quod beatae voluptatibus fugiat, voluptate atque autem nostrum hic mollitia, pariatur nemo? At saepe suscipit `,
  
  `necessitatibus fuga repudiandae quaerat deleniti corporis totam aliquam quae, autem tenetur id dolorem quam, dolores perspiciatis et nisi pariatur quasi unde sed exercitationem quas fugit! Provident iure officiis tempore consequatur repellendus dolorum fuga animi minima maiores deserunt nobis, exercitationem aliquid! Dolore autem odit numquam nobis alias reiciendis necessitatibus facere fugiat! Architecto, sit optio, quasi saepe soluta eligendi earum aliquam quas ipsa officia nemo, assumenda qui eveniet velit repellendus dignissimos odio nesciunt accusamus! Facilis laboriosam illum perspiciatis amet sint necessitatibus voluptate qui tempora ipsa at adipisci totam ra`,

  `tione excepturi aut iure ipsam recusandae id asperiores, hic nostrum aperiam esse. Maiores molestias est iste vero id cupiditate distinctio at illo doloribus recusandae amet quod et tenetur nostrum fuga, magnam vitae accusantium, dolorem ex sed nam? Excepturi culpa saepe rerum enim facere minus, quo voluptatum quam reprehenderit modi! Minima nihil tempora et, quam nisi molestias aliquam. Culpa aliquam dignissimos dolores reiciendis doloribus eius similique, aut recusandae consequuntur, sed, accusantium laboriosam non rerum blanditiis perferendis quod aliquid laudantium velit! Quod, nisi natus numquam, dolorem ipsa sit laborum illo, quia illum repudiandae alias blanditiis ex. Eum saepe quis, voluptate expedita modi commodi`,
  
  ` quia minima repudiandae quaerat id nesciunt facilis deserunt neque soluta fuga nemo eos, vel nam veritatis. Architecto, molestias incidunt delectus cum, ut explicabo necessitatibus, animi ratione mollitia iste culpa repudiandae. Est animi eos voluptates, sapiente molestias saepe laboriosam accusamus quasi veritatis facilis dolorum cupiditate esse libero similique nobis ipsam sint consequatur impedit, vero dolore. Tempore dolor ratione tenetur, aliquam exercitationem ipsam? Numquam expedita aspernatur id dicta delectus rem libero repudiandae odit, quod, animi reiciendis? Magnam culpa officia temporibus non in veritatis consectetur doloremque porro asperiores laborum, ipsa pariatur voluptates eaque! Maxime asperiores nesciunt neque officiis, quo nam cumque corrupti explicabo, id ullam adipisci facere quam ab illum laudantium alias eveniet itaque sint ipsa voluptates qui iste natus as`,

  `sumenda omnis. Facilis ea quam quibusdam excepturi molestiae et odit velit eligendi eius asperiores, dolorum illum quisquam officiis error dolores? Voluptas exercitationem, earum laudantium quasi natus sunt, laborum est suscipit error iure doloremque similique odit excepturi quo possimus officiis velit accusantium pariatur vel omnis consequatur repellat dignissimos quos! Necessitatibus nisi voluptatibus, amet assumenda, porro in aperiam debitis facere ipsa laboriosam at ut ad itaque esse error ducimus minus ab non repellat, repudiandae quas voluptas doloribus`,
  
  ` animi? Aut quaerat maxime dolor ea inventore ad hic quidem laboriosam necessitatibus, corporis harum, illo, asperiores eaque assumenda suscipit perspiciatis! Eum, ea repellat expedita ullam rem unde similique voluptatem velit praesentium exercitationem, nemo quos nesciunt totam fuga libero quibusdam quidem at placeat dolore facere, sequi animi sint nihil? Ducimus natus nobis modi adipisci voluptate deleniti veniam quas voluptatibus voluptatum debitis corrupti iste ipsa ab voluptas, su`,

  `nt consequatur sint ex! Iste reprehenderit dolore sint dolorum aperiam nulla magnam, impedit placeat nam fugiat quibusdam saepe illo dolorem ullam iusto ab quisquam exercitationem deserunt molestiae possimus vitae tenetur pariatur! Quos laborum beatae nobis, obcaecati explicabo numquam! Repudiandae ratione sequi sed ad laborum, exercitationem dicta quod, dignissimos itaque perspiciatis, optio consequatur similique aliquid iusto saepe maxime temporibus porro quia neque tempore voluptatibus? Ipsa aspernatur voluptate, et accusamus, minus, perferendis corporis dolorum eum ducimus`,
  
  ` saepe est earum soluta a amet possimus aliquid repellat illum quisquam. Aspernatur deleniti facilis aliquid voluptates repudiandae, iure, nostrum eum consectetur enim sunt quos quam debitis nesciunt animi at nulla tempora expedita incidunt mollitia ut sed officiis excepturi! Ullam iusto neque quod cumque iste doloribus, nulla dolorem sed dicta sequi quam quisquam consequuntur non, blanditiis, itaque esse vero optio. Quis magnam illo sint. Exercitationem doloremque sunt cupiditate facilis ducimus dolorem esse ex similique enim ab. Repudiandae aliquam eaque hic tempore tenetur voluptatibus minima veniam reiciendis non maiores aspernatur illum velit inventore aliquid delectus commodi eius dolore deserunt, m`,

  `ollitia modi provident voluptate? Incidunt sed officia reprehenderit saepe cum. Tempora aliquam aspernatur, cumque atque perspiciatis nam ea consectetur vitae eos veniam temporibus consequatur autem earum nihil officia eveniet animi officiis deleniti quod dignissimos excepturi! Voluptatum voluptatem, quidem exercitationem perspiciatis, nulla labore vero quae a tempore possimus tenetur nobis amet ratione earum, in dolorem fugiat aliquid quia sapiente error commodi eius totam minus nihil. Voluptas, vitae pariatur illo quia culpa dolores odio alias rem dignissimos, eum `,
  
  `necessitatibus provident mollitia repellendus voluptate id aut dolorem quisquam beatae. Ducimus ipsum dolorem sit tempora magnam, possimus odio illum nobis ad facilis rem sequi qui esse repellendus, quod quidem quasi cupiditate consectetur. Doloremque id rem ex ducimus ratione voluptate dicta ipsam veritatis nostrum praesentium, quisquam corporis consequatur aliquam ullam, incidunt repellat! Amet, consequatur commodi aliquid aperiam sed, dolorem odio reiciendis vitae nulla tenetur quasi dolores blanditiis beatae obcaecati quaerat! Culpa cumque provident adipisci numquam quae ad explicabo nam voluptatum`,

  ` magnam minus accusamus, debitis, consectetur beatae, maxime necessitatibus eveniet soluta fuga. Natus vitae ipsa voluptatum! Laborum, nam suscipit! Repellendus, enim? At quibusdam deserunt, fugit sapiente possimus suscipit ad blanditiis dolores expedita veritatis amet perferendis voluptatibus ex exercitationem, sed in error facilis obcaecati illo laudantium. Recusandae, asperiores. Odit, corporis inventore veniam iusto nesciunt laudantium obcaecati dolore in doloremque perspiciatis eligendi tenetur sunt labore quis beatae quia doloribus optio eos officiis,`,
  
  ` iure recusandae error totam voluptatum odio. Cumque dolorum, magnam eligendi ex rerum dignissimos nostrum illum blanditiis perferendis ipsam nisi praesentium facere adipisci corrupti quo commodi ad cum quam, quisquam veritatis, veniam recusandae. Cupiditate, qui quod? Fuga perferendis earum repudiandae ad maxime voluptatum, facere officia laudantium expedita delectus est animi repellendus quisquam veniam illo quae a nobis totam porro! Fuga modi quisquam excepturi consequatur!`,
];


const item = document.querySelector("#items")
const dataContainer = document.querySelector("#data")


function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.68
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}


// const generate = () => { 

//     if(isNaN(item.value)||item.value<0 || item.value>12)
//     {
//         const randomIndex =  Math.floor(Math.random()*text.length)
//         data.innerHTML = `<p>${text[randomIndex]}</p>`
//     }
//     else{

//         const data =text.slice(0,item.value)

//         const paras = data.map((d)=>{
//             return `<p>${d}</p>`
//         })

//         data.innerHTML = paras.join("");
//         console.log(data)
//     }
// }

const generate = () => {
    if (isNaN(item.value) || item.value < 0 || item.value > 9) {
        const randomIndex = Math.floor(Math.random() * text.length)
        dataContainer.innerHTML = `<p> ${text[randomIndex]} </p>`
    } else {
        const localText = (text);
        const data = localText.slice(0, item.value)
        const parars = data.map(
            (d) => {
                return `<p> ${d} </p>`
            }
        )
        // console.log(parars)
        // console.log(parars.join(""))
        dataContainer.innerHTML = parars.join("");
        // array to string
    }
}