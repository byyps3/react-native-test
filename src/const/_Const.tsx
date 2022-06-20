import { PERMISSIONS } from 'react-native-permissions';
import _Color from './_Color';

export default {
  MainColor: "#1990FF",
  AREA_ID: "500120",
  // ServerApiUrl: "http://jxnc-scs-api.z023.cn:9000/api",
  ServerApiUrl: "http://cqgx-scs-api.z023.cn:9000/api",
  // ServerApiUrl: "http://scs-api-dev.z023.cn:9009/api",
  // ServerApiUrl: "http://cqgx-scs-test-api.z023.cn:9004/api",//重庆测试环境
  // ServerApiUrl: 'http://cqgxq-scm-prod-api.z023.cn:9002/api',//重庆正式环境

  // ServerWebUrl: "http://scs-dev-v3.z023.cn",
  // ServerDownUrl: "http://scm-cqgxq-dev.z023.cn/resource/",
  ServerDownUrl: "http://jsyth.cqgx.z023.cn/resource/",//正式环境
  PermissionsString: {
    CAMERA: {
      label: '相机',
      text: 'CAMERA',
      value: {
        ios: PERMISSIONS.IOS.CAMERA,
        android: PERMISSIONS.ANDROID.CAMERA,
      },
    },
    READ_CONTACTS: {
      label: '通讯录',
      text: 'READ_CONTACTS',
      value: {
        ios: PERMISSIONS.IOS.CONTACTS,
        android: PERMISSIONS.ANDROID.READ_CONTACTS,
      },
    },
    LOCATION: {
      label: '定位',
      text: 'LOCATION',
      value: {
        ios: [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE], //PERMISSIONS.IOS.LOCATION_ALWAYS一直使用定位
        android: [
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
        ], //低版本Android 没有该权限PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION
      },
    },
    RECORD_AUDIO: {
      label: '麦克风',
      text: 'RECORD_AUDIO',
      value: {
        ios: PERMISSIONS.IOS.MICROPHONE,
        android: PERMISSIONS.ANDROID.RECORD_AUDIO, //低版本Android 没有该权限PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION
      },
    },
    // "LOCATION_BACK":{
    // 	label:"后台定位",
    // 	text:"LOCATION_BACK",
    // 	value:{
    // 		android:PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
    // 	},
    // }
  },

  ISS_OK: [{
    label: '全部',
    value: null
  },
  {
    label: '是',
    value: true
  },
  {
    label: '否',
    value: false
  },],
  APP_TYPE: {
    PROJECT: { label: "项目应用", value: "PROJECT" },
    TOOLKIT: { label: "小工具", value: "TOOLKIT" },
  },

  PRODUCTION_TYPE: {
    APP: { label: "项目应用", value: "APP" },
    HARDWARE: { label: "智能硬件", value: "HARDWARE" },
    POINT: { label: "积分充值卡", value: "POINT" },
    TOOLKIT: { label: "小工具", value: "TOOLKIT" },
  },

  BILL_PLAY_STATUS: {
    WAIT: { label: "待付款", value: "WAIT", color: "#f0ad4e" },
    EXECUTING: { label: "执行中", value: "EXECUTING", color: "#108ee9" },
    FINISHED: { label: "已完成", value: "FINISHED", color: "#00a99b" },
    CANCELED: { label: "已取消", value: "CANCELED", color: "#999999" }
  },

  MESSAGE_TYPE: {
    REMIND: { label: "消息", value: "REMIND", color: "#00a99b" },
    TODO: { label: "待办", value: "TODO", color: "#108ee9" },
    WARNING: { label: "预警", value: "WARNING", color: "#ec4d3d" },
  },

  PAY_STATUS: {
    WAIT: { label: "待支付", value: "WAIT", color: "#f0ad4e" },
    PAYING: { label: "支付中", value: "PAYING", color: "#108ee9" },
    PAYED: { label: "已支付", value: "PAYED", color: "#00a99b" },
  },

  PROJECT_USER_ROLE: {
    OWNER: { label: "创建人", value: "OWNER" },
    EXECUTOR: { label: "使用者", value: "EXECUTOR" },
    VIEWER: { label: "浏览者", value: "VIEWER" },
  },

  PROJECT_USER_ROLE_ONLY: {
    EXECUTOR: { label: "使用人", value: "EXECUTOR" },
    VIEWER: { label: "浏览人", value: "VIEWER" },
  },

  PROJECT_CATEGORY: {
    "01": { code: "01", name: "房屋建筑工程" },
    "02": { code: "02", name: "市政公用工程" },
    "03": { code: "03", name: "机电安装工程" },
    "04": { code: "04", name: "铁路工程" },
    "05": { code: "05", name: "公路工程" },
    "06": { code: "06", name: "港口与航道工程" },
    "07": { code: "07", name: "水利水电工程" },
    "08": { code: "08", name: "电力工程" },
    "09": { code: "09", name: "矿山工程" },
    "10": { code: "10", name: "冶炼工程" },
    "11": { code: "11", name: "化工石油工程" },
    "12": { code: "12", name: "通信工程" },
    "99": { code: "99", name: "其他" },
  },
  // 项目状态
  PROJECT_STATUS: {
    "001": { value: "001", label: "筹备", color: "#bfbe46" },
    "002": { value: "002", label: "立项", color: "#8175c7" },
    "003": { value: "003", label: "在建", color: "#108ee9" },
    "005": { value: "005", label: "停工", color: "#ec6459" },
    "004": { value: "004", label: "完工", color: "#5cb85c" },
    "006": { value: "006", label: "竣工", color: "#5cb85c" },
  },

  // 项目等级
  PROJECT_LEVEL: {
    "001": { value: "001", label: "部级" },
    "002": { value: "002", label: "省级" },
    "003": { value: "003", label: "地市级" },
    "004": { value: "004", label: "区县级" },
    "005": { value: "005", label: "国家级" },
    "006": { value: "006", label: "其他" },
  },

  // 项目规模
  PROJECT_SCALE: {
    "01": { value: "01", label: "大型" },
    "02": { value: "02", label: "中型" },
    "03": { value: "03", label: "小型" },
  },

  // 项目性质
  PROJECT_PROPERTY: {
    "001": { value: "001", label: "新建" },
    "002": { value: "002", label: "改建" },
    "003": { value: "003", label: "扩建" },
    "004": { value: "004", label: "恢复" },
    "005": { value: "005", label: "迁建" },
    "006": { value: "006", label: "拆除" },
    "099": { value: "099", label: "其他" },
    "010": { value: "010", label: "给水" },
    "011": { value: "011", label: "排水" },
  },
  CHECK_STATUS_COLOR: {
    "INITIAL": { color: _Color.Color.grey, name: '未检查' },
    "CHECKING": { color: _Color.Color.primary, name: '检查中' },
    "PASS": { color: _Color.Color.success, name: '通过' },
    "PROMISE_PASS": { color: _Color.Color.warning, name: '限期承诺通过' },
    "REFUSE": { color: _Color.Color.danger, name: '未通过' }
  },
  CHECK_OBJECT_COLOR: {
    "INITIAL": { color: _Color.Color.grey, name: '待检查' },
    "CHECKING": { color: _Color.Color.primary, name: '检查中' },
    "CHECKED": { color: _Color.Color.warning, name: '已检查' },
    "COMMIT": { color: _Color.Color.success, name: '已完成' }
  },
  DISCLOSURE_STATUS: {
    "INITIAL": { color: _Color.Color.grey, name: '未开始' },
    "DOING": { color: _Color.Color.primary, name: '交底中' },
    "PASS": { color: _Color.Color.warning, name: '交底完成' },
    "REFUSE": { color: _Color.Color.danger, name: '交底未通过' },
  },
  ATTENTION_STATUS_COLOR: {
    '0': { color: _Color.Color.primary, name: '项目已申报（未交底）' },
    '1': { color: _Color.Color.success, name: '交底完成' },
    '2': { color: _Color.Color.danger, name: '交底未通过' },
    '3': { color: _Color.Color.primary, name: '项目已申报（交底中）' },
    '99': { color: _Color.Color.grey, name: '未交底' },
  },
  CHECK_STATUS: {
    '1': {
      value: '1',
      label: '开工检查通过'
    },
    '2': {
      value: '2',
      label: '开工检查不通过'
    },
    '3': {
      value: '3',
      label: '限期复查中'
    },
    '4': {
      value: '4',
      label: '限期复查通过'
    },
    '5': {
      value: '5',
      label: '限期复查未通过'
    }
  },
  ATTENTION_STATUS: [
    {
      value: '-1',
      label: '未交底'
    },
    {
      value: '1',
      label: '交底已完成'
    },
    {
      value: '2',
      label: '交底未完成'
    }
  ],

  // 项目用途
  PROJECT_USE: {
    "100": { value: "100", label: "居住建筑" },
    "200": { value: "200", label: "居住建筑配套工程" },
    "300": { value: "300", label: "公共建筑" },
    "301": { value: "301", label: "办公建筑" },
    "302": { value: "302", label: "商业建筑" },
    "303": { value: "303", label: "旅游建筑" },
    "304": { value: "304", label: "科教文卫建筑" },
    "305": { value: "305", label: "交通运输类" },
    "306": { value: "306", label: "通信建筑" },
    "307": { value: "307", label: "公共建筑配套工程" },
    "400": { value: "400", label: "商住楼" },
    "500": { value: "500", label: "农业建筑" },
    "600": { value: "600", label: "农业建筑配套工程" },
    "700": { value: "700", label: "工业建筑" },
    "800": { value: "800", label: "工业建筑配套工程" },
    "999": { value: "999", label: "其他" },
  },
  CraneStatus: {
    uninstall: '未办理安装',
    install: '已办理安装',
    using: '已办理使用',
    dismantle: '已办理拆除',
    null: '暂无',
    "0": "已安装",
    "1": "已使用",
    "2": "已拆卸",
  },
  HeaderOptions: {
    headerStyle: {
      height: 42,
      backgroundColor: '#108ee9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 16
    },
  },
  //黑名单企业状态
  CORP_STATUS: {
    NO_PASS: { label: "未通过", value: "NO_PASS", color: 'red' },
    REMOVE_NO_PASS: { label: "移出未通过", value: "REMOVE_NO_PASS", color: 'red' },
    PASS: { label: "已通过", value: "PASS", color: 'green' },
    REMOVE_PASS: { label: "移出已通过", value: "REMOVE_PASS", color: 'blue' },
    APPROVING: { label: "审核中", value: "APPROVING", color: 'orange' },
    REMOVE_APPROVING: { label: "移出审核中", value: "REMOVE_APPROVING", color: 'orange' },
  },
  deal_type: {
    WAIT: { label: '待审批', value: 'WAIT' },
    APPROVED: { label: '审批通过', value: 'APPROVED' },
    REFUSED: { label: '不通过', value: 'REFUSED' },
    COMMIT: { label: '提交', value: 'COMMIT' },
  },
  BILL_PUNISH_STATUS: {
    FREE: {
      code: "FREE",
      name: "待提交",
      color: "#f0ad4e",
      action: ["SUBMIT", "REMOVE"]
    },
    SUBMITTED: {
      code: "SUBMITTED",
      name: "提交",
      color: "#f0ad4e",
      action: ["APPROVE", "CANCEL"]
    },
    APPROVING: {
      code: "APPROVING",
      name: "审批中",
      color: "#108ee9",
      action: ["APPROVE", "REFUSE", "DISAGREE"]
    },
    APPROVED: {
      code: "APPROVED",
      name: "审批通过",
      color: "#009688",
      action: ["CLOSE", "REMOVE"]
    },
    REFUSED: {
      code: "REFUSED",
      name: "审批不通过",
      color: "#ec6459",
      action: ["SUBMIT", "REMOVE"]
    },
    CLOSED: {
      code: "CLOSED",
      name: "已关闭",
      color: "#535353",
      action: ["REMOVE"]
    },
    REMOVED: {
      code: "REMOVED",
      name: "已作废",
      color: "#888888",
      action: []
    }
  },
  SIMPLE_FINE_STATUS: {
    FREE: {
      code: "FREE",
      name: "待提交",
      color: "#f0ad4e",
      action: ["SUBMIT", "REMOVE"]
    },
    SUBMITTED: {
      code: "SUBMITTED",
      name: "未知",
      color: "#f0ad4e",
      action: ["APPROVE", "CANCEL"]
    },
    APPROVING: {
      code: "APPROVING",
      name: "审核中",
      color: "#108ee9",
      action: ["APPROVE", "REFUSE", "DISAGREE"]
    },
    APPROVED: {
      code: "APPROVED",
      name: "已下发",
      color: "#009688",
      action: ["CLOSE", "REMOVE"]
    },
    REFUSED: {
      code: "REFUSED",
      name: "未知",
      color: "#ec6459",
      action: ["SUBMIT", "REMOVE"]
    },
    CLOSED: {
      code: "CLOSED",
      name: "已关闭",
      color: "#535353",
      action: ["REMOVE"]
    },
    REMOVED: {
      code: "REMOVED",
      name: "已作废",
      color: "#888888",
      action: []
    }
  },
  PUNISH_BUSINESS_STATUS: {
    PENDING_CASE: {
      name: '待立案',
      color: "#f0ad4e",
      code: 'PENDING_CASE'
    },
    CANCEL_CASE: {
      name: '取消立案',
      color: "#f0ad4e",
      code: 'CANCEL_CASE'
    },
    PENDING_NOTICE: {
      name: '待上传处罚通知',
      color: "#108ee9",
      code: 'PENDING_NOTICE'
    },
    PENDING_EVIDENCE: {
      name: '待上传罚款缴纳凭证',
      color: "#108ee9",
      code: 'PENDING_EVIDENCE'
    },
    PENDING_CHECK: {
      name: '待复核',
      color: "#108ee9",
      code: 'PENDING_CHECK'
    },
    CLOSE_CASE: {
      name: '已结案',
      color: "#009688",
      code: 'CLOSE_CASE'
    },
  },
  REFORM_BUSSINESS_STATUS: {
    REFORMING: {
      name: '整改中',
      color: "#f0ad4e",
      code: 'REFORMING'
    },
    PENDING_CHECK: {
      name: '待复核',
      color: "#108ee9",
      code: 'PENDING_CHECK'
    },
    CLOSE_CASE: {
      name: '已结案',
      color: "#009688",
      code: 'CLOSE_CASE'
    },
  },
  BILL_SCHEDULE: {
    "0": {
      code: "0",
      name: "待提交",
      color: "#108ee9",
    },
    "1": {
      code: "1",
      name: "待下发",
      color: "#108ee9",
    },
    "2": {
      code: "2",
      name: "待整改",
      color: "#108ee9",
    },
    "3": {
      code: "3",
      name: "待复核",
      color: "#108ee9",
    },
    "4": {
      code: "4",
      name: "复核不通过",
      color: "#ec6459",
    },
    "5": {
      code: "5",
      name: "已销项",
      color: "#009688",
    },
    "7": {
      code: "7",
      name: "待整改确认",
      color: "#108ee9",
    },
  },
  REFORM_STATUS: {
    FREE: {
      code: "FREE",
      name: "待提交",
      color: "#f0ad4e",
      action: ["SUBMIT", "REMOVE"]
    },
    APPROVING: {
      code: "APPROVING",
      name: "审核中",
      color: "#108ee9",
      action: ["APPROVE", "REFUSE", "DISAGREE"]
    },
    APPROVED: {
      code: "APPROVED",
      name: "审核通过",
      color: "#009688",
      action: ["CLOSE", "REMOVE"]
    },
    REFUSED: {
      code: "REFUSED",
      name: "审核不通过",
      color: "#ec6459",
      action: ["SUBMIT", "REMOVE"]
    },
    CLOSED: {
      code: "CLOSED",
      name: "已关闭",
      color: "#535353",
      action: ["REMOVE"]
    },
  },
  REPLY_STATUS: {
    WAIT_COMMIT: {
      code: "WAIT_COMMIT",
      name: "待提交",
      color: "#f0ad4e",
    },
    WAIT_REVIEW: {
      code: "WAIT_REVIEW",
      name: "待复核",
      color: "#108ee9",
    },
    REVIEW_FAIL: {
      code: "REVIEW_FAIL",
      name: "复核不通过",
      color: "#ec6459",
    },
    COMPLETE: {
      code: "COMPLETE",
      name: "完成",
      color: "#009688",
    },
  },
  RECTIFY_STATUS: {
    '0': {
      code: "0",
      color: "#f0ad4e",
      name: "待提交",
    },
    '1': {
      code: "1",
      color: "#108ee9",
      name: "已提交",
    },
    '2': {
      code: "2",
      color: "#ec6459",
      name: "不通过",
    },
    '3': {
      code: "3",
      color: "#009688",
      name: "完成",
    },
  },
  REFORM: {
    TYPE: {
      IMMEDIATELY_REFORM: {
        label: '立即整改',
        value: 'IMMEDIATELY_REFORM',
        color: _Color.Color.primary
      },
      DEADLINE_REFORM: {
        label: '限期整改',
        value: 'DEADLINE_REFORM',
        color: _Color.Color.warning
      },
      STOP_REFORM: {
        label: '停工整改',
        value: 'STOP_REFORM',
        color: _Color.Color.danger
      }
    },

    CHECK_OBJECT: [
      { value: 'INITIAL', label: '待检查' },
      { value: 'CHECKING', label: '检查中' },
      { value: 'CHECKED', label: '已检查' },
      { value: 'COMMIT', label: '已完成' }
    ],

    PermissionsString: {
      "CAMERA": {
        label: "相机",
        text: "CAMERA",
        value: {
          ios: PERMISSIONS.IOS.CAMERA,
          android: PERMISSIONS.ANDROID.CAMERA
        },
      },
      "READ_CONTACTS": {
        label: "通讯录",
        text: "READ_CONTACTS",
        value: {
          ios: PERMISSIONS.IOS.CONTACTS,
          android: PERMISSIONS.ANDROID.READ_CONTACTS
        },
      },
      "LOCATION": {
        label: "定位",
        text: "LOCATION",
        value: {
          ios: [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE, PERMISSIONS.IOS.LOCATION_ALWAYS],
          android: [PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION],
        },
      },
      "RECORD_AUDIO": {
        label: "麦克风",
        text: "RECORD_AUDIO",
        value: {
          ios: PERMISSIONS.IOS.MICROPHONE,
          android: PERMISSIONS.ANDROID.RECORD_AUDIO, //低版本Android 没有该权限PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION
        },
      },
    },
    
    STREET_CHECK: [
      { value: 'HANDLER', label: '手工开单' },
      { value: 'STREET_CHECK', label: '镇街检查' }
    ],
    EXPERT_CHECK: [
      { value: 'HANDLER', label: '手工开单' },
      { value: 'EXPERT_CHECK', label: '专家检查' }
    ],
    ROUTINE_CHECK: [
      { value: 'HANDLER', label: '手工开单' },
      { value: 'ROUTINE_CHECK', label: '临时巡检' }
    ],
    LEADER_CHECK: [
      { value: 'HANDLER', label: '手工开单' },
      { value: 'LEADER_CHECK', label: '领导检查' }
    ],
    PUNISH_STATUS: [
      { value: 'PENDING_CASE', label: '待立案' },
      { value: 'CANCEL_CASE', label: '取消立案' },
      { value: 'PENDING_NOTICE', label: '待上传处罚通知' },
      { value: 'PENDING_EVIDENCE', label: '待上传罚款缴纳凭证' },
      { value: 'PENDING_CHECK', label: '待复核' },
      { value: 'CLOSE_CASE', label: '已结案' },
    ],
    SIMPLE_STATUS: [
      { value: 'FREE', label: '保存' },
      { value: 'SUBMITTED', label: '未知' },
      { value: 'APPROVING', label: '审核中' },
      { value: 'APPROVED', label: '已下发' },
      { value: 'REFUSED', label: '拒绝' },
      { value: 'CLOSED', label: '已关闭' },
      { value: 'REMOVED', label: '已作废' },
    ],
    BILL_SCHEDULE_ENUM: [
      { value: "0", label: "待提交" },
      { value: "1", label: "待下发" },
      { value: "2", label: "待整改" },
      { value: "3", label: "待复核" },
      { value: "4", label: "复核不通过" },
      { value: "5", label: "已销项" },
      { value: "8", label: "待整改确认" },
    ],
    BILL_SCHEDULE_TYPE: [
      { value: "0", label: "待提交" },
      { value: "2", label: "待整改" },
      { value: "7", label: "待整改确认" },
      { value: "3", label: "待复核" },
      { value: "4", label: "复核不通过" },
      { value: "5", label: "已销项" },
    ],
    YesOrNo: [
      { label: '是', value: true, index: 0 },
      { label: '否', value: false, index: 1 }],
    worker_status: {
      "INIT": { code: "INIT", name: "确认入职", color: "#108ee9", status: 'primary' },
      "JOIN": { code: "JOIN", name: "在职", color: "#5cb85c", status: 'success' },
      "NOJOIN": { code: "NOJOIN", name: "离职", color: "#999999", status: 'error' },
    },
    paper_bill: {
      "INVALID": { code: "INVALID", name: "作废", color: "#999999", status: 'error' },
      "NORMAL": { code: "NORMAL", name: "正常", color: "#5cb85c", status: 'success' },
      "OVERDUE": { code: "OVERDUE", name: "过期", color: "#108ee9", status: 'warning' },
      "NOT_PASS": { code: "NOT_PASS", name: "其他", color: "#999999", status: 'primary' },
    },
    APPROVAL_STATUS: {
      "INIT": { code: "INIT", name: "未提交", color: "#999999", status: 'error' },
      "COMMIT": { code: "COMMIT", name: "审批中", color: "#108ee9", status: 'primary' },
      "PASS": { code: "PASS", name: "已完成", color: "#5cb85c", status: 'success' },
      "NOPASS": { code: "NOPASS", name: "已驳回", color: "#ec6459", status: 'warning' },
      "CLOSE": { code: "CLOSE", name: "已关闭", color: "#999999", status: 'primary' }
    },
    dangerScale: [
      { label: '超规模危大工程', value: 'SUPER_SCALE', color: '#f50' },
      { label: '一般危大工程', value: 'NOT_SUPER_SCALE', color: '#87d068' },
    ],

  },
  PLAN_PERIOD: {
    "DAY": { label: '天', value: 'DAY' },
    "MONTH": { label: '月', value: 'MONTH' },
    "QUARTER": { label: '季度', value: 'QUARTER' }
  },
  INSPECT_BILL_STATUS: {
    "FREE": {
      value: "FREE",
      label: '待提交',
      color: _Color.Color.primary
    },
    "APPROVING": {
      value: "APPROVING",
      label: '审核中',
      color: _Color.Color.primary
    },
    "APPROVED": {
      value: "APPROVED",
      label: '审核通过',
      color: _Color.Color.success
    },
    "REFUSED": {
      value: "REFUSED",
      label: '复核不通过',
      color: _Color.Color.danger
    },
    "CLOSED": {
      value: "CLOSED",
      label: '关闭',
      color: _Color.Color.dark
    }
  },
  INSPECT_CHECK_STATUS: {
    "INIT": {
      value: "INIT",
      label: '初始化',
      color: _Color.Color.primary
    },
    "NOT_CHECK": {
      value: "NOT_CHECK",
      label: '未检查',
      color: _Color.Color.dark
    },
    "CHECKING": {
      value: "CHECKING",
      label: '检查中',
      color: _Color.Color.cyan
    },
    "CHECKED": {
      value: "CHECKED",
      label: '已检查',
      color: '#9e9e9e'
    },
  },
  CHECK_RESULT: {
    "TALLY_WITH": {
      value: "TALLY_WITH",
      label: "符合",
      color: _Color.Color.success
    },
    "IGNORE": {
      value: "IGNORE",
      label: "忽略",
      color: _Color.Color.warning
    },
    "NOT_TALLY_WITH": {
      value: "NOT_TALLY_WITH",
      label: "不符合",
      color: _Color.Color.danger
    },
    "OTHER": {
      value: "OTHER",
      label: "其他",
      color: _Color.Color.dark
    },

  },
  Gdanger_level: [
    { label: '一般问题', value: 'NORMAL', index: 0 },
    { label: '较大问题', value: 'MORE', index: 1 },
    { label: '重大问题', value: 'MAJOR', index: 2 },
    { label: '行为问题', value: 'BEHAVIOR', index: 2 },
  ],
  Gdanger_level1: [
    { label: '一般隐患', value: 'NORMAL', index: 0 },
    { label: '较大隐患', value: 'MORE', index: 1 },
    { label: '重大隐患', value: 'MAJOR', index: 2 },
    { label: '行为隐患', value: 'BEHAVIOR', index: 2 },
  ],
  Gdanger_level1_NAME: {
    'NORMAL': '一般隐患',
    'MORE': '较大隐患',
    'MAJOR': '重大隐患',
    'BEHAVIOR': '行为隐患',
  },
  SUBJECT_LEVEL: [
    { value: 'JS', label: '建设单位' },
    { value: 'SG', label: '施工单位' },
    { value: 'JL', label: '监理单位' },
    { value: 'KC', label: '勘查单位' },
    { value: 'SJ', label: '设计单位' },
    { value: 'EL', label: '设备产权单位' }
  ],
  SUBJECT: {
    'JS': { value: 'JS', label: '建设单位' },
    'SG': { value: 'SG', label: '施工单位' },
    'JL': { value: 'JL', label: '监理单位' },
    'KC': { value: 'KC', label: '勘查单位' },
    'SJ': { value: 'SJ', label: '设计单位' },
    'EL': { value: 'EL', label: '设备产权单位' }
  },
  INSPECT_TYPE:{
    "HANDLER": { value: 'HANDLER', label: '手动新增',color: _Color.Color.primary },
    "DAY_PLAN": { value: 'DAY_PLAN', label: '日监督计划',color: _Color.Color.success },
  },
  ADVICES: [
    // { label: '建议处罚', value: '01' },
    { label: '立即整改', value: '02' },
    { label: '限期整改', value: '03' },
    { label: '停工整改', value: '04' },
  ],
  ADVICES_NAME: {
    '01': '建议处罚',
    '02': '立即整改',
    '03': '限期整改',
    '04': '停工整改',
  },
  REFORM_ENUM: [
		{ value: "IMMEDIATELY_REFORM", label: "立即整改" },
		{ value: "DEADLINE_REFORM", label: "限期整改" },
		{ value: "STOP_REFORM", label: "停工整改" },
	],
	REFORM_ENUM2: [
		{ value: "IMMEDIATELY_REFORM", label: "立即整改" },
		{ value: "DEADLINE_REFORM", label: "限期整改" },
	],
  SOURCE_TYPE: [
    { value: 'HANDLER', label: '手工开单' },
    { value: 'PUNISH', label: '日常监督' },
    { value: 'DAY_PLAN', label: '日计划监督' },
    // { value: 'RANDOM', label: '清单式检查' },
    // { value: 'WARNING', label: '预警' },
    // { value: 'LEADER_CHECK', label: '领导检查' },
    // { value: 'ROUTINE_CHECK', label: '临时巡检' },
    // { value: 'EXPERT_CHECK', label: '专家检查' },
    // { value: 'STREET_CHECK', label: '镇街检查' },
  ],
  PROJECT_STATUS_INSPECTION: {
    '1': { value: '1', label: '在建' },
    '2': { value: '2', label: '未开工' },
    '3': { value: '3', label: '正常停工' },
    '4': { value: '4', label: '停工未办手续' },
    '5': { value: '5', label: '竣工未验收评定' },
    '7': { value: '7', label: '竣工已验收评定' },
    '8': { value: '8', label: '特殊' },
  },
  PROJECT_TYPE_INSPECTION:{
    '1': { value: '1', label: '房建' },
    '2': { value: '2', label: '市政' },
    '6': { value: '6', label: '设备安装' },
    '7': { value: '7', label: '土石方及边坡' },
    '5': { value: '5', label: '其他' },
  }
}
