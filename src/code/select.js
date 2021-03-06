let code = {};

code.base = `
<template>
    <Select v-model="model1" style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model1: ''
            }
        }
    }
</script>
`;

code.size = `
<template>
    <Select v-model="model2" size="small" style="width:100px">
        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
    </Select>
    <Select v-model="model3" style="width:100px">
        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
    </Select>
    <Select v-model="model4" size="large" style="width:100px">
        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model2: '',
                model3: '',
                model4: ''
            }
        }
    }
</script>
`;

code.disabled = `
<template>
    <Select v-model="model5" disabled style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
    </Select>
    <Select v-model="model6" style="width:200px">
        <Option value="beijing">北京市</Option>
        <Option value="shanghai" disabled>上海市</Option>
        <Option value="shenzhen">深圳市</Option>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model5: '',
                model6: ''
            }
        }
    }
</script>
`;

code.clearable = `
<template>
    <Select v-model="model8" clearable style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model8: ''
            }
        }
    }
</script>
`;

code.group = `
<template>
    <Select v-model="model7" style="width:200px">
        <Option-group label="热门城市">
            <Option v-for="item in cityList1" :value="item.value" :key="item">{{ item.label }}</Option>
        </Option-group>
        <Option-group label="其它城市">
            <Option v-for="item in cityList2" :value="item.value" :key="item">{{ item.label }}</Option>
        </Option-group>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                cityList1: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    }
                ],
                cityList2: [
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model7: ''
            }
        }
    }
</script>
`;

code.label = `
<template>
    <Select v-model="model9" style="width:200px">
        <Option value="beijing" label="北京市">
            <span>北京</span>
            <span style="float:right;color:#ccc">Beiing</span>
        </Option>
        <Option value="shanghai" label="上海市">
            <span>上海</span>
            <span style="float:right;color:#ccc">ShangHai</span>
        </Option>
        <Option value="shenzhen" label="深圳市">
            <span>深圳</span>
            <span style="float:right;color:#ccc">ShenZhen</span>
        </Option>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                model9: ''
            }
        }
    }
</script>
`;

code.multiple = `
<template>
    <Select v-model="model10" multiple style="width:260px">
        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model10: []
            }
        }
    }
</script>
`;

code.filterable = `
<template>
    <Row>
        <i-col span="12" style="padding-right:10px">
            <Select v-model="model11" filterable>
                <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
        </i-col>
        <i-col span="12">
            <Select v-model="model12" filterable multiple>
                <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
        </i-col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model11: '',
                model12: []
            }
        }
    }
</script>
`;

export default code;