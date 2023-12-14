/* <!-- ## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
``` --> */

const fs = require("fs")

fs.readFile("a.txt","UTF-8",function(err,data){
    console.log(data.toString().split(/[\s,\t,\n]+/).join(' '))
    let a = data.toString().split(/[\s,\t,\n]+/).join(' ');
    fs.writeFile("a.txt",a,err => {
        if(err){
            console.log(err)
        }
    })
})