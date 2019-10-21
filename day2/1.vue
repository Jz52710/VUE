<template>
<div>
    <da-breadcrumb></da-breadcrumb>
    <el-card>
        <el-tabs v-model="activeTabName">
            <el-tab-pane label="借用" name="borrow">
                <!-- 按钮组 + 搜索栏 -->
                <el-row>
                    <!-- 按钮组 -->
                    <el-col :span="12">
                        <el-button type="primary" :size="$store.state.size" icon="el-icon-plus" @click="addBorrowDialogVisible = true">新增</el-button>
                        <el-button type="primary" :size="$store.state.size" icon="el-icon-xiugai" @click="revertBorrow">归还</el-button>
                        <el-button :size="$store.state.size" icon="el-icon-printer">打印</el-button>
                        <el-button :size="$store.state.size" icon="el-icon-daochu">导出</el-button>
                    </el-col>

                    <!-- 搜索栏 -->
                    <el-col :span="12" :offset="0">
                        <el-button :size="$store.state.size" icon="el-icon-search" style="margin-left:10px;float:right;"></el-button>
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
                    :data="borrows"
                    border
                    style="width: 100%;margin:10px 0;" @selection-change="handleSelectionChange">
                    <el-table-column fixed type="selection" width="55"></el-table-column>
                    <el-table-column align="center" prop="status" label="状态" width="80">
                            <template slot-scope="scope">
                                <da-assets-status :status="scope.row.status"></da-assets-status>
                            </template>
                        </el-table-column>
                    <el-table-column
                    prop="borrow_number"
                    label="借用单号"
                    width="160">
                    </el-table-column>
                    <el-table-column
                    prop="borrow_time"
                    label="借用时间"
                    width="120">
                        <template slot-scope="scope">
                            {{scope.row.borrow_time|date}}
                        </template>
                    </el-table-column>
                    <el-table-column
                    prop="personnel_name"
                    label="借用人"
                    width="100">
                    </el-table-column>
                    <el-table-column
                    prop="borrow_handle_name"
                    label="借出处理人"
                    width="100">
                    </el-table-column>
                    <el-table-column
                    prop="revert_handle_name"
                    label="归还处理人"
                    width="100">
                    </el-table-column>
                    <el-table-column
                    prop="expect_revert"
                    label="预计归还时间"
                    width="120">
                        <template slot-scope="scope">
                            {{scope.row.expect_revert|date}}
                        </template>
                    </el-table-column>
                    <el-table-column
                    prop="revert_time"
                    label="归还时间"
                    width="120">
                        <template slot-scope="scope">
                            {{scope.row.revert_time|date}}
                        </template>
                    </el-table-column>

                    <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClickShowBorrow(scope.row)" type="text" :size="$store.state.size">查看</el-button>
                    </template>
                    </el-table-column>
                </el-table>
                <!-- 分页 -->
                <el-pagination
                background
                :page-sizes="[10, 20, 30, 50]"
                :page-size="10"
                layout="sizes, prev, pager, next"
                :total="100">
                </el-pagination>

                <!-- 新增借用 -->
                <el-dialog
                title="借用单"
                :visible.sync="addBorrowDialogVisible"
                width="70%">
                    <el-form ref="form" :model="addBorrowForm" label-width="100px" :size="$store.state.size">
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="借用人">
                                    <el-input v-model="addBorrowForm.personnel_name">
                                        <el-button slot="append" icon="el-icon-user-list" @click="selectPersonDialogVisible=true"></el-button>
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="借出时间">
                                    <el-date-picker
                                    v-model="addBorrowForm.borrow_time"
                                    type="date"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="timestamp"
                                    style="width:100%;"
                                    placeholder="选择借出日期">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="预计归还">
                                    <el-date-picker
                                    v-model="addBorrowForm.expect_revert"
                                    type="date"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="timestamp"
                                    style="width:100%;"
                                    placeholder="预计归还时间">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="借出处理人">
                                    <el-input v-model="addBorrowForm.borrow_handle_name" placeholder="处理人" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="预计归还">
                                    <el-date-picker
                                    v-model="addBorrowForm.expect_revert"
                                    type="date"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="timestamp"
                                    style="width:100%;"
                                    placeholder="预计归还时间">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="归还处理人">
                                    <el-input v-model="addBorrowForm.revert_handle_name" placeholder="处理人" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24">
                                <el-form-item label="说明">
                                    <el-input type="textarea" v-model="addBorrowForm.Borrow_remarks" placeholder="借用备注"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-button :size="$store.state.size" @click="selectAssetsDialogVisible=true">选择资产</el-button>
                            <el-button type="danger" :size="$store.state.size">删除</el-button>
                        </el-row>
                        <el-table :data="selectBorrowAssetsData" border style="width: 100%;margin:10px 0;" @selection-change="handleSelectionChange">
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
                    <!-- 选择领用人 -->
                    <el-dialog
                    title="选择用户"
                    :visible.sync="selectPersonDialogVisible"
                    width="70%"
                    append-to-body>
                        <daSelectPerson :handle="handleAddGetPerson"></daSelectPerson>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="selectPersonDialogVisible = false">取 消</el-button>
                        </span>
                    </el-dialog>
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
                        <el-button :size="$store.state.size" @click="addBorrowDialogVisible = false">取 消</el-button>
                        <el-button :size="$store.state.size" type="primary" @click="addBorrowDialogVisible = false">确 定</el-button>
                    </span>
                </el-dialog>
                <!-- 查看借用 -->
                <el-dialog
                title="借用单"
                :visible.sync="showBorrowDialogVisible"
                width="70%">
                    <el-form ref="form" :model="showBorrowForm" disabled label-width="100px" :size="$store.state.size" class="show-Borrow-form">
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="借用人">
                                    <el-input v-model="showBorrowForm.personnel_name" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="借出时间">
                                    <el-date-picker
                                    v-model="showBorrowForm.borrow_time"
                                    type="date"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="timestamp"
                                    style="width:100%;"
                                    placeholder="选择领用日期" disabled>
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="预计归还">
                                    <el-date-picker
                                    v-model="showBorrowForm.expect_revert"
                                    type="date"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="timestamp"
                                    style="width:100%;"
                                    placeholder="预计归还时间" disabled>
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="借出处理人">
                                    <el-input v-model="showBorrowForm.borrow_handle_name" placeholder="处理人" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="预计归还">
                                    <el-date-picker
                                    v-model="showBorrowForm.expect_revert"
                                    type="date"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="timestamp"
                                    style="width:100%;"
                                    placeholder="预计归还时间" disabled>
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="归还处理人">
                                    <el-input v-model="showBorrowForm.revert_handle_name" placeholder="处理人" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24">
                                <el-form-item label="说明">
                                    <el-input type="textarea" v-model="showBorrowForm.Borrow_remarks" disabled></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-table :data="selectBorrowAssetsData" border style="width: 100%;margin:10px 0;">
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
                        <el-button :size="$store.state.size" type="primary" @click="showBorrowDialogVisible = false">确 定</el-button>
                    </span>
                </el-dialog>
            </el-tab-pane>
        </el-tabs>
    </el-card>
</div>
</template>
<script>
/*

borrow_id	int/ai		借用ID
borrow_number	char	14	借用单号
borrow_time	char	13	借用时间
personnel_id	int	10	借用人ID
expect_revert	char	13	预计归还时间
revert_time	char	13	归还时间
borrow_handle_id	int	10	借出处理人ID
revert_handle_id    int 10  归还处理人ID
borrow_remarks	varchar	100	借出说明
asset_id	int	10	资产ID
status	init	1	借用状态
*/
import daBreadcrumb from "@/components/da-breadcrumb";
import daAssetsStatus from "@/components/da-assets-status";
import daSelectPerson from "@/components/da-select-person";
import daSelectAssets from "@/components/da-select-assets";
export default {
    data(){
        return {
            searchDate:'',
            activeTabName:'borrow',
            addBorrowDialogVisible:false,
            selectPersonDialogVisible:false, //选择联系人对话框状态
            addBorrowForm:{},
            showBorrowForm:{},
            departments:[], //某公司下所有部门数据
            showBorrowDialogVisible:false,
            selectAssetsDialogVisible:false,
            selectedBorrowAssetsData:[], //已选择资产
            selectBorrowAssetsData:[],   //正在选择资产
            classAssetsData:[], //指定分类的资产数据
            revertBorrowIds:[],
            borrows: [
                {
                    id:1,
                    borrow_number:'JY20180618003',
                    borrow_time:'1529254718034',
                    expect_revert:'1529254718034',
                    personnel_id:1,
                    personnel_name:'张三',
                    borrow_handle_id:2,
                    borrow_handle_name:'allcky',
                    revert_handle_id:2,
                    revert_handle_name:'',
                    department_name:'研发部',
                    asset_id:'',
                    company_name:'康达',
                    revert_time:'1529254718034',
                    borrow_remarks:"",
                    status:2,
                }
            ],
        }
    },
    methods:{
        revertBorrow(){
            if(this.revertBorrowIds.length==0){
                this.$message('请选中要归还的数据条目！');
                return;
            }
            this.$confirm('是否已经检查归还资产, 是否继续?', '资产归还确认提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                //要归还的ID数组 this.revertBorrowIds
                if(true){
                    this.$message({
                        type: 'success',
                        message: '归还成功!'
                    });
                }else{
                    this.$message({
                        type: 'warning',
                        message: '归还失败!'
                    });
                }

            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消归还'
                });
            });
        },
        handleSelectionChange(val){
            //获取选中的删除条目ID
            this.revertBorrowIds = val.map((val)=>{
                return val.date
            })
        },
        handleClickShowBorrow(data){
            this.showBorrowDialogVisible = true;
            this.showBorrowForm = data;
        },
        handleAddGetAssets(data){ //正在选择资产
            this.selectBorrowAssetsData = data;
        },
        handleAddGetPerson(row){
            this.selectPersonDialogVisible = false;
            this.addBorrowForm.personnel_id = row.personnel_id;
            this.addBorrowForm.personnel_name = row.personnel_name;
        },
        handleSelectionDone(){
            this.selectAssetsDialogVisible = false; //隐藏选择资产弹窗
            this.selectedBorrowAssetsData = this.selectBorrowAssetsData; //将选择的资产放入已选择资产中
        }
    },
    components:{
        daBreadcrumb,
        daSelectPerson,
        daSelectAssets,
        daAssetsStatus
    },
    watch:{
        'addBorrowForm.company_name':function(val){
            //获取该公司下所有部门数据
            this.departments = [
                {id:1,department_name:"研发部"},
                {id:2,department_name:"人事部"},
                {id:3,department_name:"财务部"}
            ]
        }
    }
}
</script>
<style lang="less">
.show-Borrow-form .el-input input,.show-Borrow-form .el-textarea textarea{
    background-color: #fff!important;
    color:#333!important;
    cursor:default!important;
}
</style>

