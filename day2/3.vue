<template>
    <div>
        <da-breadcrumb></da-breadcrumb>
        <el-card class="box-card">
            <!-- 按钮组 + 搜索栏 -->
            <el-row>
                <!-- 按钮组 -->
                <el-col :span="12">
                    <el-button type="primary" :size="$store.state.size" icon="el-icon-plus" @click="addScrap">新增</el-button>
                    <el-button type="warning" :size="$store.state.size" icon="el-icon-plus" @click="restore">还原</el-button>
                    <el-button :size="$store.state.size" icon="el-icon-printer">打印</el-button>
                    <el-button :size="$store.state.size" icon="el-icon-daochu">导出</el-button>
                </el-col>
                <!-- 搜索栏 -->
                <el-col :span="12" :offset="0">
                    <el-button :size="$store.state.size" icon="el-icon-search" style="margin-left:10px;float:right;" @click="searchDone"></el-button>
                    <el-date-picker
                    v-model="searchDate"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :size="$store.state.size"
                    style="float:right;"
                    >
                    </el-date-picker>
                </el-col>
            </el-row>
            <!-- 数据表格 -->
            <el-table
            :data="scrapsData"
            border
            style="width: 100%;margin:10px 0;" @selection-change="handleSelectionChange">
                <el-table-column
                prop="scrap_number"
                label="报废单号"
                >
                </el-table-column>
                <el-table-column
                prop="scrap_time"
                label="报修时间"
                >
                    <template slot-scope="scope">
                        {{scope.row.scrap_time | moment}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="scrap_handle_name"
                label="处理人"
                >
                </el-table-column>
                <el-table-column
                prop="scrap_remarks"
                label="说明"
                style="white-space:nowrap;"
                :show-overflow-tooltip="true"
                ></el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <el-button @click="showScrap(scope.row)" type="text" :size="$store.state.size">查看</el-button>
                </template>
                </el-table-column>
            </el-table>

            <!-- 分页 -->
            <el-pagination
            background
            :page-sizes="$store.state.pageSize"
            :page-size="$store.state.pageSize[0]"
            layout="sizes, prev, pager, next"
            :total="100">
            </el-pagination>
        </el-card>
        <!-- 新增报废单 -->
        <el-dialog
        title="新增报废单"
        :visible.sync="addDialogVisible"
        width="70%">
            <el-form ref="form" :model="addDataForm" label-width="80px" :size="$store.state.size">
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="报废单号">
                            <el-input v-model="addDataForm.scrap_number" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="报废时间">
                            <el-date-picker
                            v-model="addDataForm.scrap_time"
                            type="date"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="timestamp"
                            style="width:100%;"
                            placeholder="选择报修时间">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="处理人">
                            <el-input v-model="addDataForm.scrap_handle_name" disabled></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="24">
                        <el-form-item label="说明">
                            <el-input type="textarea" v-model="addDataForm.scrap_remarks" placeholder="报废说明"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-button :size="$store.state.size" @click="selectAssetsDialogVisible=true">选择资产</el-button>
                    <el-button type="danger" :size="$store.state.size">删除</el-button>
                </el-row>
                <el-table :data="selectedAssetsData" border style="width: 100%;margin:10px 0;" @selection-change="handleSelectionChange">
                    <el-table-column fixed type="selection" width="55"></el-table-column>
                    <el-table-column prop="bar_code" label="资产条码" width="140"> </el-table-column>
                    <el-table-column prop="name" label="资产名称" width="150"> </el-table-column>
                    <el-table-column prop="type_id" label="资产类型" width="150"> </el-table-column>
                    <el-table-column prop="company" label="使用公司" width="100"> </el-table-column>
                    <el-table-column prop="department" label="使用部门" width="100"> </el-table-column>
                    <el-table-column prop="user_id" label="使用人" width="100"> </el-table-column>
                    <el-table-column prop="manager_id" label="管理员" width="100"> </el-table-column>
                    <el-table-column prop="address" label="存放地点" width="100"> </el-table-column>
                </el-table>
            </el-form>
            <!-- 选择资产弹窗 -->
            <el-dialog
            title="选择资产"
            :visible.sync="selectAssetsDialogVisible"
            width="70%"
            append-to-body>
                <da-select-assets :handle="handleAddGetAssets"></da-select-assets>
                <span slot="footer" class="dialog-footer">
                    <el-button :size="$store.state.size" @click="selectAssetsDialogVisible = false">取 消</el-button>
                    <el-button :size="$store.state.size" type="primary" @click="handleSelectionDone">确 定</el-button>
                </span>
            </el-dialog>
            <span slot="footer" class="dialog-footer">
                <el-button :size="$store.state.size" @click="addDialogVisible = false">取 消</el-button>
                <el-button :size="$store.state.size" type="primary" @click="addScrapDone">确 定</el-button>
            </span>
        </el-dialog>

        <!-- 查看维修单 -->
        <el-dialog
        title="查看报废单"
        :visible.sync="showDialogVisible"
        width="70%">
            <el-form ref="form" :model="showDataForm" label-width="80px" :size="$store.state.size" disabled class="show-dialog">
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="报废单号">
                            <el-input v-model="showDataForm.scrap_number" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="报废时间">
                            <el-date-picker
                            v-model="showDataForm.scrap_time"
                            type="date"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="timestamp"
                            style="width:100%;"
                            placeholder="选择报修时间">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="处理人">
                            <el-input v-model="showDataForm.scrap_handle_name" disabled></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="24">
                        <el-form-item label="说明">
                            <el-input type="textarea" v-model="showDataForm.scrap_remarks" placeholder="报废说明"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-table :data="showAssetsData" border style="width: 100%;margin:10px 0;">
                    <el-table-column prop="bar_code" label="资产条码" width="140"> </el-table-column>
                    <el-table-column prop="name" label="资产名称" width="150"> </el-table-column>
                    <el-table-column prop="type_id" label="资产类型" width="150"> </el-table-column>
                    <el-table-column prop="company" label="使用公司" width="100"> </el-table-column>
                    <el-table-column prop="department" label="使用部门" width="100"> </el-table-column>
                    <el-table-column prop="user_id" label="使用人" width="100"> </el-table-column>
                    <el-table-column prop="manager_id" label="管理员" width="100"> </el-table-column>
                    <el-table-column prop="address" label="存放地点" width="100"> </el-table-column>
                </el-table>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button :size="$store.state.size" @click="showDialogVisible = false">取 消</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import daBreadcrumb from "@/components/da-breadcrumb";
import daSelectAssets from "@/components/da-select-assets";
export default {
    data:function(){
        return {
            searchDate:'',          //搜索数据
            addDialogVisible:false, //添加报废单弹窗状态
            showDialogVisible:false,//查看报废单弹窗状态
            selectAssetsDialogVisible:false,//选择资产弹窗状态
            addDataForm:{},         //添加报废清单
            selectAssetsData:[],    //添加正在选择报废资产列表
            selectedAssetsData:[],  //添加已选择选择报废资产列表
            showDataForm:{},        //查看报废清单
            showAssetsData:[],      //查看报废资产列表
            scrapIds:[],            //选择的报废单 ID列表
            scrapsData:[
                {
                    scrap_id:1,
                    scrap_number:"BF20180823004",
                    scrap_time:"1535897265806",
                    scrap_handle_name:"李四",
                    scrap_handle_id:1,
                    scrap_remarks:"腐蚀严重无法修复或继续使用要发生危险！腐蚀严重无法修复或继续使用要发生危险！腐蚀严重无法修复或继续使用要发生危险！"
                }
            ],          //报废列表数据
        }
    },
    methods:{
        //添加报废清单
        addScrap:function(){
            this.addDialogVisible = true;
            this.addDataForm = Object.assign(this.addDataForm,{
                "scrap_time":Date.now()
            })
        },
        //点击确定添加报废清单
        addScrapDone:function(){
            //addDataForm 要添加的资产数据
            if(true){
                this.addDialogVisible = false;
                this.addDataForm = {};
                this.$message({
                    type: 'success',
                    message: '添加成功!'
                });
            }else{
                this.$message({
                    type: 'warning',
                    message: '添加失败!'
                });
            }
        },
        //搜索指定日期范围数据
        searchDone:function(){
            //searchDate
        },
        //显示报废清单
        showScrap:function(row){
            this.showDialogVisible = true;
            this.showDataForm = row;

        },
        //选择资产
        handleAddGetAssets:function(data){
            this.selectAssetsData = data;
        },
        handleSelectionDone:function(){
            this.selectAssetsDialogVisible = false; //隐藏选择资产弹窗
            this.selectedAssetsData = this.selectAssetsData; //将选择的资产放入已选择资产中
        },
        //点击还原按钮
        restore:function(){
            if(this.scrapIds.length==0){
                this.$message('请选中要还原的数据条目！');
                return;
            }
            this.$confirm('此操作将还原该数据, 是否继续?', '资产还原确认提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                //要还原的资产
                if(true){
                    this.$message({
                        type: 'success',
                        message: '还原成功!'
                    });
                    //获取最新 报废单列表
                    this.scrapsData = []
                }else{
                    this.$message({
                        type: 'warning',
                        message: '还原失败!'
                    });
                }

            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消还原'
                });
            });
        },
        //选择 指定报废单
        handleSelectionChange:function(val){
            //获取选中的删除条目ID
            this.scrapIds = val.map((val)=>{
                return val.scrap_number
            })
        },
        searchDone:function(){

        }
    },
    components:{
        daBreadcrumb,
        daSelectAssets,
    }
}
</script>
<style lang="less">
.show-dialog {
    .el-input input,.el-textarea textarea{
        background-color: #fff!important;
        color: #606266!important;
        cursor: default!important;
    }
}
</style>