<template>
	<view class="main-container">
		<view class="form-header">
			<text class="title">焊缝施焊记录编辑</text>
			<!-- <text class="subtitle">编号: {{form.bh || '--'}}</text> -->
		</view>
		
		<view class="form-card">
			<view class="form-section">
				<text class="section-title">基本信息</text>
				<view class="form-grid">
					<uni-forms-item label="施工单位" name="sgdw" class="form-item">
						<uni-easyinput type="text" v-model="form.sgdw" placeholder="请输入施工单位"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item label="建造单位" name="jzdw" class="form-item">
						<uni-easyinput type="text" v-model="form.jzdw" placeholder="请输入建造单位"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item label="监理单位" name="jldw" class="form-item">
						<uni-easyinput type="text" v-model="form.jldw" placeholder="请输入监理单位"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item label="合同号" name="hth" class="form-item">
						<uni-easyinput type="text" v-model="form.hth" placeholder="请输入合同号"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item label="编号" name="bh" class="form-item">
						<uni-easyinput type="text" v-model="form.bh" placeholder="请输入编号"></uni-easyinput>
					</uni-forms-item>
					
				</view>
			</view>
			
			<view class="form-section">
				<text class="section-title">焊接信息</text>
				<view class="form-grid">
					<uni-forms-item label="工程名称" name="gcmc" class="form-item">
						<uni-easyinput type="text" v-model="form.gcmc" placeholder="请输入工程名称"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item label="工程部位" name="gcbw" class="form-item">
						<uni-easyinput type="text" v-model="form.gcbw" placeholder="请输入工程部位"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item label="杆件名称" name="gjmc" class="form-item">
						<uni-easyinput type="text" v-model="form.gjmc" placeholder="请输入杆件名称"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item label="杆件编号" name="gjbh" class="form-item">
						<uni-easyinput type="text" v-model="form.gjbh" placeholder="请输入杆件编号"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item label="焊接方法" name="hjff" class="form-item">
						<uni-easyinput type="text" v-model="form.hjff" placeholder="请输入焊接方法"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item label="接头形式" name="jtxs" class="form-item">
						<uni-easyinput type="text" v-model="form.jtxs" placeholder="请输入接头形式"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item label="环境温度(℃)" name="hjwd" class="form-item">
						<uni-easyinput type="number" v-model="form.hjwd" placeholder="请输入环境温度"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item label="相对湿度(%)" name="xdsd" class="form-item">
						<uni-easyinput type="number" v-model="form.xdsd" placeholder="请输入相对湿度"></uni-easyinput>
					</uni-forms-item>
				</view>
			</view>
		</view>
		
		<view class="form-card table-card">
			<text class="section-title">焊接明细记录</text>
			<view class="table-container">
				<uni-table border stripe emptyText="暂无数据" class="editable-table">
					<uni-tr>
						<uni-th width="50" align="center">序号</uni-th>
						<uni-th align="center">焊缝编号</uni-th>
						<uni-th align="center">焊道序号</uni-th>
						<uni-th align="center">预热温度(℃)</uni-th>
						<uni-th align="center">层间温度(℃)</uni-th>
						<uni-th align="center">焊接材料</uni-th>
						<uni-th align="center">电流(A)</uni-th>
						<uni-th align="center">电压(V)</uni-th>
						<uni-th align="center">车速(m/h)</uni-th>
						<uni-th align="center">焊工编号</uni-th>
						<uni-th align="center">操作时间</uni-th>
					</uni-tr>
					<uni-tr v-for="(detailItem, index) in sj40DetailList" :key="index">
						<uni-td align="center">{{index + 1}}</uni-td>
						<uni-td>
							<uni-easyinput 
								v-model="detailItem.hfbh" 
								placeholder="焊缝编号"
								class="table-input"
							></uni-easyinput>
						</uni-td>
						<uni-td>
							<uni-easyinput 
								v-model="detailItem.hdxh" 
								placeholder="焊道序号"
								class="table-input"
							></uni-easyinput>
						</uni-td>
						<uni-td>
							<uni-easyinput 
								type="number"
								v-model="detailItem.yrwd" 
								placeholder="预热温度"
								class="table-input"
							></uni-easyinput>
						</uni-td>
						<uni-td>
							<uni-easyinput 
								type="number"
								v-model="detailItem.cjwd" 
								placeholder="层间温度"
								class="table-input"
							></uni-easyinput>
						</uni-td>
						<uni-td>
							<uni-easyinput 
								v-model="detailItem.hjcl" 
								placeholder="焊接材料"
								class="table-input"
							></uni-easyinput>
						</uni-td>
						<uni-td>
							<uni-easyinput 
								type="number"
								v-model="detailItem.dl" 
								placeholder="电流"
								class="table-input"
							></uni-easyinput>
						</uni-td>
						<uni-td>
							<uni-easyinput 
								type="number"
								v-model="detailItem.dy" 
								placeholder="电压"
								class="table-input"
							></uni-easyinput>
						</uni-td>
						<uni-td>
							<uni-easyinput 
								type="number"
								v-model="detailItem.cs" 
								placeholder="车速"
								class="table-input"
							></uni-easyinput>
						</uni-td>
						<uni-td>
							<uni-easyinput 
								v-model="detailItem.hgbh" 
								placeholder="焊工编号"
								class="table-input"
							></uni-easyinput>
						</uni-td>
						<uni-td>
							<uni-datetime-picker 
								type="datetime"
								v-model="detailItem.czsj"
								class="table-datepicker"
							></uni-datetime-picker>
						</uni-td>
					</uni-tr>
				</uni-table>
				
				<button class="add-row-btn" @click="addDetailRow">
					<uni-icons type="plusempty" size="10" color="#fff"></uni-icons>
					添加行
				</button>
			</view>
		</view>
		
		<view class="form-actions">
			<button class="submit-btn" @click="submitForm">提交保存</button>
		</view>
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
					sgdw: '',
					jzdw: '',
					jldw: '',
					hth: '',
					bh: '',
					gcmc: '',
					gcbw: '',
					gjmc: '',
					gjbh: '',
					hjff: '',
					jtxs: '',
					hjwd: '',
					xdsd: ''
				},
				sj40DetailList: []
			}
		},
		onLoad(options) {
			if (options.id) {
				this.loadList(options.id)
			} else {
				// 如果是新增，初始化一条明细记录
				this.addDetailRow();
			}
		},
		methods: {
			loadList(id) {
				getZbmain(id).then(response => {
					this.form = response.data;
					this.sj40DetailList = response.data.sj40DetailList || [];
					this.title = "焊缝施焊记录编辑";
				}).catch(error => {
					console.error("加载数据失败:", error);
					uni.showToast({
						title: '加载数据失败',
						icon: 'none'
					})
				});
			},
			
			// 添加明细行
			addDetailRow() {
				this.sj40DetailList.push({
					hfbh: '',
					hdxh: '',
					yrwd: '',
					cjwd: '',
					hjcl: '',
					dl: '',
					dy: '',
					cs: '',
					hgbh: '',
					czsj: new Date().toISOString().split('T')[0] // 默认当天
				});
			},
			
			// 删除明细行
			removeDetailRow(index) {
				if (this.sj40DetailList.length > 1) {
					this.sj40DetailList.splice(index, 1);
				} else {
					uni.showToast({
						title: '至少保留一条记录',
						icon: 'none'
					})
				}
			},

			submitForm() {
				// 表单验证
				if (!this.validateForm()) return;
				
				this.form.sj40DetailList = this.sj40DetailList;
				if (this.form.id != null) {
					updateZbmain(this.form).then(response => {
						uni.showToast({
							title: '保存成功',
							icon: 'success'
						});
						setTimeout(() => {
							uni.navigateBack();
						}, 1500);
					}).catch(error => {
						console.error("保存失败:", error);
						uni.showToast({
							title: '保存失败',
							icon: 'none'
						})
					});
				} else {
					// 新增逻辑
					// addZbmain(this.form).then(...)
				}
			},
			
			// 表单验证
			validateForm() {
				if (!this.form.sgdw) {
					uni.showToast({ title: '请填写施工单位', icon: 'none' });
					return false;
				}
				if (!this.form.bh) {
					uni.showToast({ title: '请填写编号', icon: 'none' });
					return false;
				}
				// 验证明细数据
				for (let i = 0; i < this.sj40DetailList.length; i++) {
					const row = this.sj40DetailList[i];
					if (!row.hfbh) {
						uni.showToast({ title: `第${i+1}行焊缝编号不能为空`, icon: 'none' });
						return false;
					}
				}
				return true;
			}
		}
	}
</script>

<style scoped lang="scss">
	.main-container {
		background-color: #f5f7fa;
		min-height: 100vh;
		padding: 20rpx;
		box-sizing: border-box;
	}
	
	.form-header {
		padding: 25rpx 30rpx;
		background: linear-gradient(135deg, #1a5276, #2c3e50);
		border-radius: 16rpx;
		margin-bottom: 25rpx;
		box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
		
		.title {
			display: block;
			font-size: 38rpx;
			font-weight: bold;
			color: white;
			margin-bottom: 8rpx;
		}
		
		.subtitle {
			font-size: 28rpx;
			color: rgba(255, 255, 255, 0.85);
		}
	}
	
	.form-card {
		background-color: #ffffff;
		border-radius: 16rpx;
		padding: 30rpx;
		margin-bottom: 30rpx;
		box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
		
		&.table-card {
			padding: 25rpx 15rpx;
		}
	}
	
	.form-section {
		margin-bottom: 35rpx;
		
		&:last-child {
			margin-bottom: 0;
		}
		
		.section-title {
			display: block;
			font-size: 34rpx;
			font-weight: bold;
			color: #2c3e50;
			padding-bottom: 20rpx;
			margin-bottom: 20rpx;
			border-bottom: 1rpx solid #eee;
		}
	}
	
	.form-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 25rpx;
		
		.form-item {
			margin-bottom: 0;
		}
	}
	
	.table-container {
		overflow-x: auto;
	}
	
	.editable-table {
		width: 100%;
		min-width: 1200rpx;
		
		.uni-table-th {
			background-color: #f8f9fa;
			font-weight: bold;
			color: #2c3e50;
		}
		
		.table-input {
			height: 70rpx;
			padding: 0 10rpx;
			
			:deep(.uni-easyinput__content) {
				min-height: auto;
				border: 1rpx solid #dcdfe6;
				border-radius: 8rpx;
			}
		}
		
		.table-datepicker {
			:deep(.uni-date-editor) {
				height: 70rpx;
				border: 1rpx solid #dcdfe6;
				border-radius: 8rpx;
			}
		}
	}
	
	.add-row-btn {
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #3498db;
			color: white;
			margin-top: 25rpx;
			padding: 15rpx 0;
			border-radius: 8rpx;
			font-size: 28rpx;
			position: sticky;
			left: 0;
			bottom: 0;
			width: 100%;
			z-index: 10;
			box-shadow: 0 -4rpx 10rpx rgba(0, 0, 0, 0.1);
		}
	
	.form-actions {
		margin-top: 40rpx;
		padding: 0 15rpx;
		
		.submit-btn {
			background: linear-gradient(135deg, #27ae60, #2ecc71);
			color: white;
			height: 90rpx;
			border-radius: 12rpx;
			font-size: 32rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			box-shadow: 0 6rpx 12rpx rgba(39, 174, 96, 0.3);
		}
	}
	
	/* 响应式调整 */
	@media (max-width: 750rpx) {
		.form-grid {
			grid-template-columns: 1fr;
		}
		
		.form-card {
			padding: 20rpx;
		}
	}
</style>