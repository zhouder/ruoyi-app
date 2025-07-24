<template>
	<view class="main-container">
		<!-- 顶部标题 -->
		<view class="header">
			<text class="title">SJ40信息管理</text>
			<text class="subtitle">共 {{this.total}} 条记录</text>
		</view>

		<uni-forms :model="queryParams" class="search-form">
			<uni-forms-item label="施工单位" name="sgdw">
				<uni-easyinput type="text" v-model="queryParams.sgdw" placeholder="请输入施工单位"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="建造单位" name="jzdw">
				<uni-easyinput type="text" v-model="queryParams.jzdw" placeholder="请输入建造单位"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="监理单位" name="jldw">
				<uni-easyinput type="text" v-model="queryParams.jldw" placeholder="请输入监理单位"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="合同号" name="hth">
				<uni-easyinput type="text" v-model="queryParams.hth" placeholder="请输入合同号"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="编号" name="bh">
				<uni-easyinput type="text" v-model="queryParams.bh" placeholder="请输入编号"></uni-easyinput>
			</uni-forms-item>
			<view class="form-actions">
				<button class="search-btn" type="primary" size="default" @click="getList">
					<uni-icons type="search" size="16" color="#fff"></uni-icons>
					搜索
				</button>
				<button class="reset-btn" type="default" size="default" @click="resetSearch">
					<uni-icons type="refresh" size="16" color="#333"></uni-icons>
					重置
				</button>
			</view>
		</uni-forms>

		<button class="add-record-btn" @click="handleAdd()">
			<uni-icons type="plusempty" size="10" color="#fff"></uni-icons>
			添加记录
		</button>

		<view class="list-wrapper">
			<!-- 数据卡片 -->
			<view class="card" v-for="(item, index) in zbmainList" :key="index" @click="goToForm(item.id, item.sgdw)">
				<view class="card-header">
					<text class="card-title">记录 {{(queryParams.pageNum-1)*queryParams.pageSize + index+1}}</text>
					<!-- <text class="card-id">ID: {{item.bh || '--'}}</text> -->
				</view>

				<view class="info-grid">
					<view class="info-item">
						<text class="label">施工单位</text>
						<text class="value">{{item.sgdw || '--'}}</text>
					</view>
					<view class="info-item">
						<text class="label">建造单位</text>
						<text class="value">{{item.jzdw || '--'}}</text>
					</view>
					<view class="info-item">
						<text class="label">监理单位</text>
						<text class="value">{{item.jldw || '--'}}</text>
					</view>
					<view class="info-item">
						<text class="label">合同号</text>
						<text class="value">{{item.hth || '--'}}</text>
					</view>
					<view class="info-item">
						<text class="label">编号</text>
						<text class="value">{{item.bh || '--'}}</text>
					</view>
				</view>
			</view>

			<!-- 空数据提示 -->
			<view v-if="zbmainList.length === 0" class="empty-state">
				<image src="/static/empty.png" class="empty-image"></image>
				<text class="empty-text">暂无数据</text>
			</view>
		</view>

		<uni-pagination v-model="queryParams.pageNum" :pageSize="queryParams.pageSize" :total="total"
			style="margin-top: 10px;" @change="getList">
		</uni-pagination>

	</view>
</template>

<script>
	import {
		listZbmain,
		getZbmain
	} from '../../api/sj40/sj40.js'
	export default {
		data() {
			return {
				zbmainList: [],
				total: 0,
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
					cjsj: null,
					userid: null,
					position: null,
				},
				// 添加初始查询参数用于重置
				initialQueryParams: {
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
					cjsj: null,
					userid: null,
					position: null,
				}
			}
		},
		onShow() {
			this.getList()
		},

		onLoad() {

		},
		methods: {
			getList() {
				listZbmain(this.queryParams).then(response => {
					console.log("数据加载成功:", response)
					this.zbmainList = response.rows || [];
					this.total = response.total;
				}).catch(error => {
					console.error("数据加载失败:", error)
					uni.showToast({
						title: '加载数据失败',
						icon: 'none'
					})
				});
			},
			goToForm(id, sgdw) {
				uni.navigateTo({
					url: '/pages/sj40/sj40_form?id=' + id + '&sgdw=' + sgdw
				})
			},
			handleAdd() {
				uni.navigateTo({
					url: '/pages/sj40/sj40_form'
				})
			},

			// 重置方法
			resetSearch() {
				// 重置查询参数
				this.queryParams = {
					...this.initialQueryParams
				};
				// 重置页码为1
				this.queryParams.pageNum = 1;
				// 重新加载数据
				this.getList();
			},
		}
	}
</script>

<style scoped lang="scss">
	.main-container {
		background-color: #f5f7fa;
		min-height: 100vh;
		padding: 20rpx;
	}

	.header {
		padding: 30rpx 20rpx;
		background: linear-gradient(135deg, #3498db, #1a5276);
		border-radius: 16rpx;
		margin-bottom: 30rpx;
		box-shadow: 0 4rpx 12rpx rgba(52, 152, 219, 0.2);

		.title {
			display: block;
			font-size: 40rpx;
			font-weight: bold;
			color: white;
			margin-bottom: 10rpx;
		}

		.subtitle {
			font-size: 28rpx;
			color: rgba(255, 255, 255, 0.8);
		}
	}

	.card {
		background-color: #ffffff;
		border-radius: 20rpx;
		padding: 30rpx;
		margin-bottom: 30rpx;
		box-shadow: 0 6rpx 18rpx rgba(0, 0, 0, 0.05);
		transition: transform 0.3s ease, box-shadow 0.3s ease;

		&:active {
			transform: translateY(-4rpx);
			box-shadow: 0 10rpx 25rpx rgba(0, 0, 0, 0.1);
		}
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 20rpx;
		margin-bottom: 20rpx;
		border-bottom: 1rpx solid #eee;

		.card-title {
			font-size: 34rpx;
			font-weight: bold;
			color: #2c3e50;
		}

		.card-id {
			font-size: 28rpx;
			color: #7f8c8d;
			background-color: #f8f9fa;
			padding: 6rpx 16rpx;
			border-radius: 20rpx;
		}
	}

	.info-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 24rpx;
	}

	.info-item {
		.label {
			display: block;
			font-size: 28rpx;
			color: #7f8c8d;
			margin-bottom: 8rpx;
		}

		.value {
			display: block;
			font-size: 32rpx;
			color: #34495e;
			font-weight: 500;
			word-break: break-all;

			&.highlight {
				color: #e74c3c;
				font-weight: bold;
			}
		}
	}

	.empty-state {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 80rpx 0;

		.empty-image {
			width: 280rpx;
			height: 280rpx;
			opacity: 0.6;
			margin-bottom: 40rpx;
		}

		.empty-text {
			font-size: 32rpx;
			color: #95a5a6;
		}
	}

	.search-form {
		background-color: #fff;
		border-radius: 16rpx;
		padding: 30rpx;
		margin-bottom: 30rpx;
		box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
	}

	/* 表单操作按钮样式 */
	.form-actions {
		display: flex;
		gap: 20rpx;
		margin-top: 20rpx;
	}

	.search-btn {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, #3498db, #1a5276);
		color: white;
		height: 80rpx;
		border-radius: 10rpx;
		font-size: 30rpx;
		font-weight: bold;
		box-shadow: 0 4rpx 8rpx rgba(52, 152, 219, 0.3);
	}

	.reset-btn {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #f8f9fa;
		color: #333;
		height: 80rpx;
		border-radius: 10rpx;
		font-size: 30rpx;
		font-weight: bold;
		border: 1rpx solid #dcdfe6;
	}

	/* 响应式调整 */
	@media (max-width: 600rpx) {
		.info-grid {
			grid-template-columns: 1fr;
		}

		.card {
			padding: 24rpx;
		}
		.form-actions {
					flex-direction: column;
					gap: 15rpx;
				}
				
				.search-btn, .reset-btn {
					width: 100%;
				}
	}

	.add-record-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, #27ae60, #2ecc71);
		color: white;
		height: 90rpx;
		border-radius: 12rpx;
		font-size: 32rpx;
		font-weight: bold;
		box-shadow: 0 6rpx 12rpx rgba(39, 174, 96, 0.3);
		transition: all 0.3s ease;

		&:active {
			transform: scale(0.98);
			background: linear-gradient(135deg, #219653, #27ae60);
		}
	}
</style>