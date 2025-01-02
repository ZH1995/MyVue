import {ref} from 'vue'
export default function(){
    let userName = ref('zhangsan')
    let salary = ref(1000)
    function addSalary(){
        salary.value += 100
        console.log(salary)
    }
    return {
        userName,
        salary,
        addSalary
    }
}