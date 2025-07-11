<template>

    <div class="container">
        <div class="row">
            <div class="col-6 mx-auto">
                <div class="card p-5 rounded-3">
                    <div class="card-header p-3 mt-2">
                        <div class="result-container w-100">
                            <p class="fs-2">{{ result }}</p>
                            <p class="mb-0 fs-6 text-secondary" >{{ calNum }}</p>
                        </div>
                        
                    </div>
                    <div class="card-body pt-5">
                        <div class="row ">
                            <!-- line-1 -->
                            <div class="col-3">
                                <button type="button" class="btn-cal rounded-3" @click="clear">AC</button>
                            </div>
                            <div class="col-3">
                                <button type="button" class="btn-cal rounded-3" @click="numClick">Delete</button>
                            </div>
                            <div class="col-3">
                                <button type="button" class="btn-cal rounded-3" @click="numClick">%</button>
                            </div>
                            <div class="col-3">
                                <button type="button" class="btn-cal rounded-3" @click="numClick">/</button>
                            </div>

                            <!-- line-2 -->
                            <div class="col-3">
                                <button type="button" class="btn-cal rounded-3" @click="numClick">7</button>
                            </div>
                            <div class="col-3">
                                <button type="button" class="btn-cal rounded-3" @click="numClick">8</button>
                            </div>
                            <div class="col-3">
                                <button type="button" class="btn-cal rounded-3" @click="numClick">9</button>
                            </div>
                            <div class="col-3">
                                <button type="button" class="btn-cal rounded-3" @click="numClick">x</button>
                            </div>

                            <!-- line-2 -->
                            <div class="col-3">
                                <button type="button" class="btn-cal rounded-3" @click="numClick">4</button>
                            </div>
                            <div class="col-3">
                                <button type="button" class="btn-cal rounded-3" @click="numClick">5</button>
                            </div>
                            <div class="col-3">
                                <button type="button" class="btn-cal rounded-3" @click="numClick">6</button>
                            </div>
                            <div class="col-3">
                                <button type="button" class="btn-cal rounded-3" @click="numClick">-</button>
                            </div>

                            <!-- line-3 -->
                            <div class="col-3">
                                <button type="button" class="btn-cal rounded-3" @click="numClick">1</button>
                            </div>
                            <div class="col-3">
                                <button type="button" class="btn-cal rounded-3" @click="numClick">2</button>
                            </div>
                            <div class="col-3">
                                <button type="button" class="btn-cal rounded-3" @click="numClick">3</button>
                            </div>
                            <div class="col-3">
                                <button type="button" class="btn-cal rounded-3" @click="numClick">+</button>
                            </div>

                            <div class="col-3">
                                <button type="button" class="btn-cal rounded-3" @click="numClick">0</button>
                            </div>
                            <div class="col-3">
                                <button type="button" class="btn-cal rounded-3" @click="numClick">.</button>
                            </div>
                            <div class="col-6">
                                <button type="button" class="btn-cal rounded-3" @click="finalResult">=</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
    import { ref } from 'vue';
    let calNum = ref('0');
    let result = ref('0');
    
    function numClick(event) {
        let number = event.target.innerText;
        if(calNum.value == 0) {
            calNum.value = number.toString();
        } else {
            if(number == 'x') {
                number = '*';
            }
            calNum.value += number.toString();

        }
    }

    function clear() {
        calNum.value = '0';
        result.value = '0';
    }    

    function finalResult() {
        result.value = eval(calNum.value);
    }
</script>

<style scoped>

.btn-cal {
    width: 100%;
    padding: 20px 15px;
    font-size: 1.3rem;
    margin-bottom: 20px;
}

.col-6 .card{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.card .card-header {
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

</style>