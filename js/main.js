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
            this.array.push({text: this.newInput});
        },
        toggleDone: function(){
            if(this.array.done == true){
                console.log(this);
                return false;
            } else {
                return true;
            }
        }
    },
});