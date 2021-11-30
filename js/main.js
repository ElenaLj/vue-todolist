const app = new Vue({
    el: "#root",
    data: {
       array: [
           {
            text: "Fare la spesa",
            done: true,
           },
           {
            text: "Portare il gatto dal veterinario",
            done: false,
           },
           {
            text: "Passare l'aspirapolvere",
            done: true,
           },
           {
            text: "Fare la lavatrice",
            done: false,
           },
           {
            text: "Portare la macchina dal meccanico",
            done: true,
           },
           {
            text: "Chiamare la mamma",
            done: false,
           },
       ],
       newInput: "",
    },
    methods: {
        removeTodo: function(index){
            this.array.splice(index, 1);
        },
        addToDo: function(){
            this.array.push({text: this.newInput, done: false})
        },
        toggleDone: function(index){
            console.log(this.array[index]);

            // if(this.array[index].done == true){
            //     this.array[index].done = false;
            // } else {
            //     this.array[index].done = true;
            // }

            //oppure meglio così
            this.array[index].done = !this.array[index].done
        }
    },
});