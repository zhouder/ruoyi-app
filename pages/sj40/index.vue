<template>
	<view class="main-container">
		<!-- 顶部标题 -->
		<view class="header">
			<text class="title">SJ40信息管理</text>
			<text class="subtitle">共 {{zbmainList.length}} 条记录</text>
		</view>

		<view class="list-wrapper">
			<!-- 数据卡片 -->
			<view class="card" v-for="(item, index) in zbmainList" :key="index" @click="goToForm(item.id, item.sgdw)">
				<view class="card-header">
					<text class="card-title">记录 {{index + 1}}</text>
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
	</view>
</template>

<script>
	import {
		listZbmain
	} from '../../api/sj40/sj40.js'
	export default {
		data() {
			return {
				zbmainList: [],
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
		onShow(){
			this.getList()
		},
		
		onLoad() {
			
		},
		methods: {
			getList() {
				listZbmain(this.queryParams).then(response => {
					console.log("数据加载成功:", response)
					this.zbmainList = response.rows || [];
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

	/* 响应式调整 */
	@media (max-width: 600rpx) {
		.info-grid {
			grid-template-columns: 1fr;
		}

		.card {
			padding: 24rpx;
		}
	}
</style>