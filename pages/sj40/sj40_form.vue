<template>
	<view class="main-container">
		<uni-forms-item label="施工单位" name="sgdw">
			<uni-easyinput type="text" v-model="form.sgdw" placeholder="请输入施工单位"></uni-easyinput>
		</uni-forms-item>
		<uni-forms-item label="建造单位" name="jzdw">
			<uni-easyinput type="text" v-model="form.jzdw" placeholder="请输入建造单位"></uni-easyinput>
		</uni-forms-item>
		<uni-forms-item label="监理单位" name="jldw">
			<uni-easyinput type="text" v-model="form.jldw" placeholder="请输入监理单位"></uni-easyinput>
		</uni-forms-item>
		<uni-forms-item label="合同号" name="hth">
			<uni-easyinput type="text" v-model="form.hth" placeholder="请输入合同号"></uni-easyinput>
		</uni-forms-item>
		<uni-forms-item label="编号" name="bh">
			<uni-easyinput type="text" v-model="form.bh" placeholder="请输入编号"></uni-easyinput>
		</uni-forms-item>
		<uni-forms-item label="工程名称" name="gcmc">
			<uni-easyinput type="text" v-model="form.gcmc" placeholder="请输入工程名称"></uni-easyinput>
		</uni-forms-item>
		<uni-forms-item label="工程部位" name="gcbw">
			<uni-easyinput type="text" v-model="form.gcbw" placeholder="请输入工程部位"></uni-easyinput>
		</uni-forms-item>
		<uni-forms-item label="杆件名称" name="gjmc">
			<uni-easyinput type="text" v-model="form.gjmc" placeholder="请输入杆件名称"></uni-easyinput>
		</uni-forms-item>
		<uni-forms-item label="杆件编号" name="gjbh">
			<uni-easyinput type="text" v-model="form.gjbh" placeholder="请输入杆件编号"></uni-easyinput>
		</uni-forms-item>
		<uni-forms-item label="焊接方法" name="hjff">
			<uni-easyinput type="text" v-model="form.hjff" placeholder="请输入焊接方法"></uni-easyinput>
		</uni-forms-item>
		<uni-forms-item label="接头形式" name="jtxs">
			<uni-easyinput type="text" v-model="form.jtxs" placeholder="请输入接头形式"></uni-easyinput>
		</uni-forms-item>
		<uni-forms-item label="环境温度(℃)" name="hjwd">
			<uni-easyinput type="text" v-model="form.hjwd" placeholder="请输入环境温度(℃)"></uni-easyinput>
		</uni-forms-item>
		<uni-forms-item label="相对湿度(%)" name="xdsd">
			<uni-easyinput type="text" v-model="form.xdsd" placeholder="请输入相对湿度(%)"></uni-easyinput>
		</uni-forms-item>

		<uni-table border stripe emptyText="暂无更多数据">
			<!-- 表头行 -->
			<uni-tr>
				<uni-th align="left">序号</uni-th>
				<uni-th align="left">焊缝编号</uni-th>
				<uni-th align="left">焊道序号</uni-th>
				<uni-th align="left">预热温度(℃)</uni-th>
				<uni-th align="left">层间温度(℃)</uni-th>
				<uni-th align="left">焊接材料</uni-th>
				<uni-th align="left">电流(A)</uni-th>
				<uni-th align="left">电压(V)</uni-th>
				<uni-th align="left">车速(m/h)</uni-th>
				<uni-th align="left">焊工编号</uni-th>
				<uni-th align="left">操作时间</uni-th>
			</uni-tr>
			<uni-tr v-for="(detailItem,key) in sj40DetailList" :key="key">
				<uni-td>{{key+1}}</uni-td>
				<!-- <uni-td>
					<uni-easyinput v-model="detailItem.jcxm" placeholder="请输入检测项目"></uni-easyinput>
				</uni-td> -->
				<!-- <uni-td>{{detailItem.xh}}</uni-td> -->
				<uni-td>{{detailItem.hfbh}}</uni-td>
				<uni-td>{{detailItem.hdxh}}</uni-td>
				<uni-td>{{detailItem.yrwd}}</uni-td>
				<uni-td>{{detailItem.cjwd}}</uni-td>
				<uni-td>{{detailItem.hjcl}}</uni-td>
				<uni-td>{{detailItem.dl}}</uni-td>
				<uni-td>{{detailItem.dy}}</uni-td>
				<uni-td>{{detailItem.cs}}</uni-td>
				<uni-td>{{detailItem.hgbh}}</uni-td>
				<uni-td>{{detailItem.czsj}}</uni-td>
			</uni-tr>
		</uni-table>



		<uni-forms>
			<button size='mini' @click='submitForm()' style="margin-top: 10px;">提交</button>
		</uni-forms>
	</view>
</template>

<script>
	import {
		listZbmain,
		getZbmain,
		updateZbmain
	} from '../../api/sj40/sj40.js'
	export default {
		data() {
			return {
				title: '',
				form: {

				},
				sj40DetailList: []
			}
		},
		onLoad(options) {
			console.log(options.id)
			console.log(options.sgdw)
			this.loadList(options.id)
		},
		methods: {
			loadList(id) {
				getZbmain(id).then(response => {
					this.form = response.data;
					this.sj40DetailList = response.data.sj40DetailList;
					this.title = "修改主要焊缝施焊记录主表";
					console.log(this.form);
					console.log(this.sj40DetailList)
				});
			},

			submitForm() {
				this.form.sj40DetailList = this.sj40DetailList;
				if (this.form.id != null) {
					updateZbmain(this.form).then(response => {
						uni.navigateBack()
					});
				} else {
					// addZbmain(this.form).then(response => {
					// 	this.$modal.msgSuccess("新增成功");
					// 	this.open = false;
					// 	this.getList();
					// });
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.main-container {
		background-color: #f5f7fa;
		min-height: 100vh;
		padding: 20rpx;
	}
</style>