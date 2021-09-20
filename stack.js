class Queue {
 constructor() {
   this.queue = [];
 }
 push(msg) {
   this.queue.push(msg);
 }
 check() {
   console.log(this.queue);
 }
 pop() {
   this.queue.pop();
 }
}
 
const my_queue = new Queue();
my_queue.push("Milk");
my_queue.push("Eggs");
my_queue.check();
my_queue.pop();
my_queue.check();
my_queue.pop();
my_queue.check();