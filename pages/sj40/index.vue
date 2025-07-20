<template>
	<view class="main-container">
		<view class="list-wrapper">
			<view class="list-item" v-for="(item,key) in zbmainList" :key="key">
				<p>施工单位：{{item.sgdw}}</p>
				<p>建造单位：{{item.jzdw}}</p>
				<p>监理单位：{{item.jldw}}</p>
				<p>编号：{{item.bh}}</p>
				<p>合同号：{{item.hth}}</p>
			</view>			
		</view>
	</view>
</template>

<script>
	import {listZbmain} from '../../api/sj40/sj40.js'
	export default {
		data() {
			return {
				zbmainList: [],
				// 查询参数
				queryParams: {
					pageNum: 1,
					pageSize: 10,
					sgdw: null,
					jzdw: null,
					jldw: null,
					gcmc: null,
					hth: null,
					bh: null,
					gcbw: null,
					gjmc: null,
					gjbh: null,
					hjff: null,
					jtxs: null,
					hjwd: null,
					xdsd: null,
					sgy: null,
					zygcs: null,
					cjsj: null
				},
			}
		},
		onLoad() {
			this.getList()
		},
		methods: {
			getList() {
				listZbmain(this.queryParams).then(response => {
					console.log(response)
					this.zbmainList = response.rows;
					//this.total = response.total;
					//this.loading = false;
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	
	.main-container{
		background-color: #fff;
		padding: 10px;
	
		.list-wrapper{
			
			.list-item{
				border: 1px solid red;
				padding: 10px;
				margin-bottom: 10px;
			}
			
			
		}
	
	}
	
	
</style>