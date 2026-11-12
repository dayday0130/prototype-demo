const modules = [
  { key: "projects", name: "科研项目库" },
  { key: "achievements", name: "科研成果" },
  { key: "funds", name: "科研经费" },
  { key: "laborCosts", name: "人工成本" },
  { key: "areas", name: "面积信息管理" },
  { key: "sources", name: "项目来源管理" }
];

const state = {
  page: "projects",
  mode: "list",
  currentProjectId: "KY2026-001",
  detailTab: "achievements",
  importYear: 2026,
  importMonth: 5
};

const projects = [
  {
    id: "KY2026-001",
    name: "高性能纺织品检测关键技术研究",
    department: "光学检测中心",
    leader: "赵龙峰",
    external: "华南理工大学课题组",
    internal: "陈信均、黎娟",
    source: "总局",
    start: "2026-01-01",
    end: "2026-12-31",
    changes: [],
    status: "在研",
    partner: "广州质量研究院",
    budget: 860000,
    usedRate: "42%",
    expected: "检测方法 2 项、专利 1 项",
    actual: "阶段报告 1 份",
    acceptDate: "",
    identifyDate: "",
    remark: "重点跟进经费归集",
    sponsor: "总局",
    sponsorAmount: 500000,
    owner: "高企项目",
    areas: [
      { department: "光学检测中心", area: "120.00" },
      { department: "材料检测中心", area: "35.00" }
    ],
    laborBudget: 220000,
    directBudget: 180000,
    reagentBudget: 90000,
    depreciationBudget: 70000,
    intangibleBudget: 20000,
    designBudget: 30000,
    testBudget: 80000,
    outsourceBudget: 120000,
    otherBudget: 50000
  },
  {
    id: "KY2025-018",
    name: "绿色低碳面料评价体系建设",
    department: "材料检测中心",
    leader: "向华菊",
    external: "中纺联专家组",
    internal: "杨晓红、钟炬锋",
    source: "纺工联",
    start: "2025-07-01",
    end: "2026-06-30",
    changes: [],
    status: "即将到期",
    partner: "广东省纺织协会",
    budget: 520000,
    usedRate: "71%",
    expected: "团体标准 1 项",
    actual: "标准草案已完成",
    acceptDate: "",
    identifyDate: "",
    remark: "",
    sponsor: "纺工联",
    sponsorAmount: 300000,
    owner: "公共项目",
    areas: [
      { department: "材料检测中心", area: "200.00" },
      { department: "羽控检测中心", area: "65.00" }
    ],
    laborBudget: 160000,
    directBudget: 110000,
    reagentBudget: 60000,
    depreciationBudget: 50000,
    intangibleBudget: 10000,
    designBudget: 20000,
    testBudget: 40000,
    outsourceBudget: 50000,
    otherBudget: 20000
  },
  {
    id: "KY2024-032",
    name: "消费品安全风险监测模型研究",
    department: "羽控检测中心",
    leader: "陈信均",
    external: "省药监局数据中心",
    internal: "胡妏妏、杨晓红",
    source: "省药监局",
    start: "2024-03-01",
    end: "2025-12-31",
    changes: [],
    status: "到期未验收",
    partner: "省药监局",
    budget: 730000,
    usedRate: "88%",
    expected: "模型 1 套、论文 1 篇",
    actual: "模型已上线试运行",
    acceptDate: "",
    identifyDate: "",
    remark: "待组织验收",
    sponsor: "省药监局",
    sponsorAmount: 450000,
    owner: "公共项目",
    areas: [
      { department: "羽控检测中心", area: "110.00" },
      { department: "光学检测中心", area: "20.00" }
    ],
    laborBudget: 210000,
    directBudget: 140000,
    reagentBudget: 75000,
    depreciationBudget: 60000,
    intangibleBudget: 15000,
    designBudget: 25000,
    testBudget: 60000,
    outsourceBudget: 90000,
    otherBudget: 55000
  },
  {
    id: "KY2023-009",
    name: "纺织品色牢度智能判定技术研究",
    department: "光学检测中心",
    leader: "黎娟",
    external: "无",
    internal: "赵龙峰、陈信均",
    source: "集团",
    start: "2023-01-01",
    end: "2024-12-31",
    changes: [],
    status: "已验收",
    partner: "集团技术中心",
    budget: 420000,
    usedRate: "96%",
    expected: "软件著作权 1 项",
    actual: "已形成软件著作权 1 项",
    acceptDate: "2025-01-15",
    identifyDate: "2025-02-20",
    remark: "验收通过",
    sponsor: "集团",
    sponsorAmount: 420000,
    owner: "高企项目",
    areas: [
      { department: "光学检测中心", area: "80.00" }
    ],
    laborBudget: 150000,
    directBudget: 80000,
    reagentBudget: 45000,
    depreciationBudget: 40000,
    intangibleBudget: 12000,
    designBudget: 18000,
    testBudget: 35000,
    outsourceBudget: 25000,
    otherBudget: 15000
  }
];

const areas = [
  ["羽控检测中心", "979.00", "110.00", "陈信均", "2023/11/2 14:32:48"],
  ["材料检测中心", "1469.30", "265.00", "向华菊", "2023/10/31 15:07:13"],
  ["光学检测中心", "971.80", "180.00", "赵龙峰", "2023/10/27 16:01:08"]
];

const sources = [
  { order: 1, name: "总局", status: "启用", isDefault: "是", creator: "杨晓红", createdAt: "2026/5/12 14:32:48", editor: "杨晓红", editedAt: "2026/5/12 15:08:21" },
  { order: 2, name: "纺工联", status: "启用", isDefault: "否", creator: "杨晓红", createdAt: "2026/5/12 14:32:48", editor: "杨晓红", editedAt: "2026/5/12 15:08:21" },
  { order: 3, name: "省局", status: "启用", isDefault: "否", creator: "杨晓红", createdAt: "2026/5/12 14:32:48", editor: "杨晓红", editedAt: "2026/5/12 15:08:21" },
  { order: 4, name: "省药监局", status: "停用", isDefault: "否", creator: "杨晓红", createdAt: "2026/5/12 14:32:48", editor: "杨晓红", editedAt: "2026/5/12 15:08:21" },
  { order: 5, name: "市局", status: "启用", isDefault: "否", creator: "杨晓红", createdAt: "2026/5/12 14:32:48", editor: "杨晓红", editedAt: "2026/5/12 15:08:21" },
  { order: 6, name: "集团", status: "启用", isDefault: "否", creator: "杨晓红", createdAt: "2026/5/12 14:32:48", editor: "杨晓红", editedAt: "2026/5/12 15:08:21" }
];

const achievements = [
  ["一种纺织品耐磨性能检测装置", "实用新型", "陈信均", "授权", "广纺院", "CN202620001", "2026-02-10", "2026-08-15", "", "KY2026-001", "高性能纺织品检测关键技术研究"],
  ["低碳面料评价方法", "发明专利", "向华菊", "申请中", "广纺院", "CN202510889", "2025-11-02", "", "", "KY2025-018", "绿色低碳面料评价体系建设"]
];

const funds = [
  ["高企项目", "KY2026-001", "高性能纺织品检测关键技术研究", "光学检测中心", "赵龙峰", "总局", "2026-01-01", "2026-12-31", "在研", "860000", "361200", "220000", "498800", "7", "42%", "52800", "71257"],
  ["公共项目", "KY2025-018", "绿色低碳面料评价体系建设", "材料检测中心", "向华菊", "纺工联", "2025-07-01", "2026-06-30", "即将到期", "520000", "369200", "155000", "150800", "2", "71%", "36400", "75400"],
  ["公共项目", "KY2024-032", "消费品安全风险监测模型研究", "羽控检测中心", "陈信均", "省药监局", "2024-03-01", "2025-12-31", "到期未验收", "730000", "642400", "98000", "87600", "0", "88%", "0", "0"],
  ["高企项目", "KY2023-009", "纺织品色牢度智能判定技术研究", "光学检测中心", "黎娟", "集团", "2023-01-01", "2024-12-31", "已验收", "420000", "403200", "0", "16800", "0", "96%", "0", "0"]
];

const laborCosts = [
  { month: "2026-05", projectId: "KY2026-001", projectName: "高性能纺织品检测关键技术研究", name: "赵龙峰", department: "光学检测中心", projectRate: "35%", totalRate: "60%" },
  { month: "2026-05", projectId: "KY2026-001", projectName: "高性能纺织品检测关键技术研究", name: "陈信均", department: "光学检测中心", projectRate: "25%", totalRate: "55%" },
  { month: "2026-05", projectId: "KY2025-018", projectName: "绿色低碳面料评价体系建设", name: "向华菊", department: "材料检测中心", projectRate: "40%", totalRate: "70%" },
  { month: "2026-04", projectId: "KY2024-032", projectName: "消费品安全风险监测模型研究", name: "杨晓红", department: "综合管理部", projectRate: "15%", totalRate: "45%" }
];

const fundDetailColumns = [
  "科目代码", "科目名称", "科目总预算（元）",
  "2025-1月", "2025-2月", "2025-3月", "2025-4月", "2025-5月", "2025-6月",
  "2025-7月", "2025-8月", "2025-9月", "2025-10月", "2025-11月", "2025-12月",
  "2026-1月", "2026-2月", "2026-3月", "2026-4月", "合计"
];

const detailRows = [
  ["5301001001", "人员人工费", "220000", "9000", "11000", "13000", "15000", "15000", "16000", "17000", "18000", "18000", "19000", "19000", "20000", "12000", "18000", "21000", "16000", "257000"],
  ["5301001005", "直接投入费", "180000", "5000", "6200", "7200", "8000", "7600", "8200", "9000", "9500", "9600", "10200", "10800", "11200", "8000", "9000", "12000", "10000", "141500"],
  ["530100100500", "耗材费", "90000", "1800", "2200", "2600", "3000", "3200", "3400", "3600", "3900", "4100", "4300", "4500", "4700", "3000", "4200", "5000", "2600", "56100"],
  ["530100100500", "水费", "12000", "300", "360", "420", "480", "500", "520", "540", "560", "580", "600", "620", "640", "500", "600", "520", "680", "8500"],
  ["530100100500", "电费", "16000", "560", "620", "720", "760", "800", "830", "860", "900", "930", "950", "980", "1000", "800", "950", "920", "1100", "13680"],
  ["5301001002", "折旧费", "70000", "3500", "3500", "3500", "3500", "3500", "3500", "3500", "3500", "3500", "3500", "3500", "3500", "4000", "4000", "4000", "4000", "58000"],
  ["5301001", "费用化支出", "650000", "21000", "24000", "27000", "30000", "31000", "32000", "33500", "34500", "35000", "36000", "37000", "38000", "30000", "39000", "44000", "36000", "537000"],
  ["", "设备采购费", "100000", "", "", "15000", "", "", "20000", "", "", "", "10000", "", "", "", "25000", "", "", "70000"],
  ["", "研发支出", "0", "10830", "13320", "15660", "18260", "18500", "18850", "20600", "21440", "21590", "22050", "22400", "22660", "16700", "30450", "31160", "23620", "308090"]
];

const listConfigs = {
  projects: {
    title: "科研项目库",
    query: ["项目编号", "项目名称", "承担部门", "项目负责人", "项目来源", "项目状态", "项目所属", "截止日期"],
    actions: ["新增", "修改", "删除", "导入", "导出"],
    headers: ["项目编号", "项目名称", "承担部门", "项目负责人", "外部成员", "内部成员", "项目来源", "开始日期", "截止日期", "变更", "项目状态", "合作单位", "项目总经费", "已使用经费占比", "预期成果", "实际成果", "验收日期", "鉴定日期", "资助单位", "资助金额", "项目所属", "占地面积"],
    tableClass: "wide-table project-table"
  },
  achievements: {
    title: "科研成果",
    query: ["产权名称", "产权类型", "发明人", "状态", "专利权人", "代理机构", "申请号/专利号", "申请日期"],
    actions: ["新增", "修改", "删除", "导入", "导出"],
    headers: ["知识产权名称", "知识产权类型", "发明人/注册人/登记人", "状态", "专利权人", "申请号/专利号", "申请日期", "授权日期", "终止/驳回日期", "项目编号", "项目名称", "代理机构", "成果转化年份", "备注"],
    tableClass: "wide-table"
  },
  funds: {
    title: "科研经费",
    query: ["项目所属", "项目编号", "项目名称", "承担部门/机构", "项目负责人", "项目来源", "项目状态", "已用经费占比"],
    actions: ["导入月度明细", "导出"],
    headers: ["项目所属", "项目编号", "项目名称", "承担部门/机构", "项目负责人", "项目来源", "开始时间", "截止时间", "项目状态", "总预算（元）", "已使用经费（元）", "当年已用经费（元）", "剩余经费（元）", "剩余时间（月）", "已用经费占比", "每月至少需归集费用", "每月最多需归集费用", "操作"],
    tableClass: "wide-table funds-table"
  },
  laborCosts: {
    title: "人工成本",
    query: ["月度", "部门名称", "人员名称", "科研工时占比", "项目编号", "项目名称", "项目所属", "项目状态", "项目来源"],
    actions: ["新增月度数据", "新增", "修改", "删除", "导入", "导出"],
    headers: ["月度", "项目编号", "项目名称", "姓名", "部门", "项目工时占比", "总科研工时占比"],
    tableClass: "medium-table labor-cost-table"
  },
  areas: {
    title: "面积信息管理",
    query: ["部门名称"],
    actions: ["新增", "修改", "删除", "导入", "导出"],
    headers: ["部门名称", "实验室总面积", "科研用地面积", "创建人", "创建时间"],
    tableClass: "medium-table"
  },
  sources: {
    title: "项目来源管理",
    query: ["项目来源名称"],
    actions: ["新增", "修改", "删除", "启用", "停用"],
    headers: ["序号", "项目来源名称", "状态", "创建人", "创建时间", "编辑人", "编辑时间"],
    tableClass: ""
  }
};

function render() {
  renderMenu();
  renderTabs();
  setBreadcrumb();
  if (state.mode === "list") renderList(state.page);
  if (state.mode === "form") renderForm(state.page);
  if (state.mode === "detail") renderProjectDetail();
  if (state.mode === "fundDetail") renderFundDetail();
}

function renderMenu() {
  document.querySelector("#moduleMenu").innerHTML = modules.map(item => `<button type="button" class="${state.page === item.key ? "is-active" : ""}" data-page="${item.key}">${item.name}</button>`).join("");
}

function renderTabs() {
  const current = listConfigs[state.page]?.title || "科研项目库";
  const label = state.mode === "form" ? `新增${current.replace("管理", "")}` : state.mode === "detail" ? "项目查看" : state.mode === "fundDetail" ? "经费明细查询" : current;
  document.querySelector("#tabbar").innerHTML = `<button class="tab">首页</button><button class="tab is-active">● ${label} ×</button>`;
}

function setBreadcrumb() {
  const current = listConfigs[state.page]?.title || "科研项目库";
  const label = state.mode === "form" ? `新增${current.replace("管理", "")}` : state.mode === "detail" ? "项目查看" : state.mode === "fundDetail" ? "经费明细查询" : current;
  document.querySelector("#breadcrumb").textContent = `首页 / 科研项目管理 / ${label}`;
}

function renderList(key) {
  const config = listConfigs[key];
  document.querySelector("#app").innerHTML = `
    <div class="page-body">
      <div class="query-panel">
        ${config.query.map(name => field(name)).join("")}
      </div>
      <div class="toolbar">
        ${config.actions.map(actionButton).join("")}
        <span class="spacer"></span>
        <button class="btn primary" type="button" data-action="search">搜索</button>
        <button class="btn" type="button" data-action="reset">重置</button>
        <button class="btn" type="button" data-action="showAll">显示全部</button>
      </div>
      <div class="table-wrap">
        <table class="${config.tableClass}">
          <thead><tr><th class="check-col"><input type="checkbox" /></th>${config.headers.map((h, i) => `<th class="${stickyActionClass(key, i)}">${h}</th>`).join("")}</tr></thead>
          <tbody>${rowsFor(key)}</tbody>
        </table>
      </div>
    </div>
    ${pager()}
  `;
}

function field(name, value = "") {
  const dateLike = name.includes("日期") || name.includes("时间");
  const selectLike = ["项目状态", "项目来源", "项目所属", "产权类型", "状态", "承担部门", "承担部门/机构"].includes(name);
  const input = name === "月度"
    ? `<div class="range-field"><input class="input" type="month" /><span>至</span><input class="input" type="month" /></div>`
    : selectLike
    ? `<select class="select"><option>请选择</option><option>${value || "总局"}</option></select>`
    : `<input class="input" ${dateLike ? "type='date'" : "type='text'"} value="${value}" placeholder="请输入${name}" />`;
  return `<div class="field"><label>${name}</label>${input}</div>`;
}

function actionButton(name) {
  const cls = name === "新增" || name === "新增月度数据" ? "blue" : name === "修改" || name === "启用" ? "green" : name === "删除" || name === "停用" ? "red" : name.includes("导入") || name === "导出" ? "orange" : "";
  return `<button class="btn ${cls}" type="button" data-action="${name}">${symbol(name)} ${name}</button>`;
}

function symbol(name) {
  if (name === "新增") return "+";
  if (name === "修改") return "✎";
  if (name === "删除") return "⌫";
  if (name === "启用") return "✓";
  if (name === "停用") return "⊘";
  if (name.includes("导入")) return "⇧";
  if (name === "导出") return "⇩";
  return "";
}

function rowsFor(key) {
  if (key === "projects") {
    return projects.map(p => `
      <tr>
        <td class="check-col"><input type="checkbox" /></td>
        <td><button class="link" data-view-project="${p.id}">${p.id}</button></td>
        <td><button class="link" data-view-project="${p.id}">${p.name}</button></td>
        <td>${p.department}</td><td>${p.leader}</td><td>${p.external}</td><td>${p.internal}</td><td>${p.source}</td>
        <td>${p.start}</td><td>${p.end}</td><td>${renderChanges(p.changes)}</td><td>${status(p.status)}</td>
        <td>${p.partner}</td><td>${money(p.budget)}</td><td>${p.usedRate}</td><td>${p.expected}</td><td>${p.actual}</td>
        <td>${p.acceptDate || "-"}</td><td>${p.identifyDate || "-"}</td><td>${p.sponsor}</td><td>${money(p.sponsorAmount)}</td><td>${p.owner}</td><td>${renderAreas(p.areas)}</td>
      </tr>`).join("");
  }
  if (key === "areas") return areas.map(r => `<tr><td class="check-col"><input type="checkbox" /></td>${r.map(cell).join("")}</tr>`).join("");
  if (key === "sources") {
    return sources.map(r => `
      <tr><td class="check-col"><input type="checkbox" /></td>
      <td>${r.order}</td><td><span class="source-name-content">${r.isDefault === "是" ? `<span class="default-tag">默认</span>` : ""}<span>${r.name}</span></span></td><td>${status(r.status)}</td><td>${r.creator}</td><td>${r.createdAt}</td><td>${r.editor}</td><td>${r.editedAt}</td></tr>`).join("");
  }
  if (key === "achievements") {
    return achievements.map(r => `
      <tr><td class="check-col"><input type="checkbox" /></td>
      ${r.map((v, idx) => idx >= 9 && idx <= 10 ? `<td><button class="link" data-view-project="${r[9]}">${v}</button></td>` : cell(v)).join("")}
      <td>华南代理</td><td>2026</td><td>-</td></tr>`).join("");
  }
  if (key === "funds") {
    return funds.map(r => `
      <tr><td class="check-col"><input type="checkbox" /></td>
      ${r.map((v, idx) => idx === 1 || idx === 2 ? `<td><button class="link" data-view-project="${r[1]}">${v}</button></td>` : idx === 8 ? `<td>${status(v)}</td>` : cell(v)).join("")}
      <td class="sticky-action"><button class="btn blue" data-fund-detail="${r[1]}">查看明细</button></td></tr>`).join("");
  }
  if (key === "laborCosts") {
    return laborCosts.map(r => `
      <tr><td class="check-col"><input type="checkbox" /></td>
      <td>${r.month}</td><td><button class="link" data-view-project="${r.projectId}">${r.projectId}</button></td><td><button class="link" data-view-project="${r.projectId}">${r.projectName}</button></td><td>${r.name}</td><td>${r.department}</td><td>${r.projectRate}</td><td>${r.totalRate}</td></tr>`).join("");
  }
  return "";
}

function stickyActionClass(key, index) {
  return key === "funds" && index === listConfigs.funds.headers.length - 1 ? "sticky-action" : "";
}

function renderChanges(changes) {
  if (!changes?.length) return "-";
  return `<div class="mini-list">${changes.map((item, index) => `<div>${index + 1}. 开始 ${item.start}<br>截止 ${item.end}<br>变更 ${item.changeDate}</div>`).join("")}</div>`;
}

function renderAreas(items) {
  if (!items?.length) return "-";
  return `<div class="area-lines">${items.map(item => `${item.department} ${item.area}㎡`).join("<br>")}</div>`;
}

function cell(value) {
  return `<td>${value || "-"}</td>`;
}

function status(value) {
  const cls = value === "即将到期" ? "warn" : value === "到期未验收" || value === "停用" ? "danger" : value === "已验收" || value === "启用" ? "done" : "";
  return `<span class="status ${cls}">${value}</span>`;
}

function pager() {
  return `<div class="pager"><span>共 128 条</span><select class="select" style="width:96px"><option>20条/页</option></select><span class="page-no active">1</span><span class="page-no">2</span><span class="page-no">3</span><span class="page-no">…</span><span>前往</span><input class="input" style="width:48px" value="1" /><span>页</span></div>`;
}

function renderForm(key) {
  const config = listConfigs[key];
  const fields = formFields(key);
  document.querySelector("#app").innerHTML = `
    <div class="page-body form-page">
      <div class="section-title">基本信息</div>
      <div class="form-grid">${fields.map(f => formField(f)).join("")}</div>
      ${key === "projects" ? projectExtraForm() : ""}
    </div>
    <div class="form-actions">
      <button class="btn primary" data-action="save">保存</button>
      <button class="btn" data-action="cancel">取消</button>
    </div>
  `;
  document.title = `新增${config.title}`;
}

function openFormModal(key) {
  const config = listConfigs[key];
  const modal = document.querySelector("#modal");
  document.querySelector("#modalTitle").textContent = `新增${config.title.replace("管理", "")}`;
  document.querySelector("#modalBody").innerHTML = `
    <div class="modal-body ${key === "areas" ? "area-modal-body" : ""}">
      <div class="form-grid modal-form-grid">${formFields(key).map(f => formField(f)).join("")}</div>
      <div class="toolbar" style="margin-top:18px">
        <span class="spacer"></span>
        <button class="btn primary" data-action="saveModal">保存</button>
        <button class="btn" data-close-modal>取消</button>
      </div>
    </div>
  `;
  modal.classList.toggle("is-wide", key === "areas");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function formFields(key) {
  if (key === "projects") return ["项目名称*", "承担部门", "项目负责人", "外部成员", "内部成员", "项目来源", "开始日期*", "截止日期*", "合作单位", "项目总经费", "预期成果", "实际成果", "资助单位", "资助金额（元）", "项目所属", "备注"];
  if (key === "areas") return ["部门名称*", "实验室总面积*"];
  if (key === "sources") return ["序号*", "项目来源名称*", "默认"];
  if (key === "laborCosts") return ["月度*", "项目编号*", "项目名称", "姓名*", "部门", "项目工时占比*"];
  if (key === "achievements") return ["知识产权名称*", "申请日期", "申请号/专利号", "知识产权类型", "发明人/注册人/登记人", "授权日期", "终止/驳回日期", "状态", "专利权人", "所属机构", "项目编号", "项目名称", "代理机构", "成果转化年份", "备注"];
  return ["项目编号", "项目名称", "年月", "附件"];
}

function formField(name) {
  const required = name.includes("*");
  const clean = name.replace("*", "");
  const dateLike = clean.includes("日期") || clean === "年月";
  if (clean === "默认") {
    return `<div class="field"><label>${clean}</label><label class="switch"><input type="checkbox" /><span></span></label></div>`;
  }
  if (clean.includes("占比")) {
    return `<div class="field"><label>${required ? "<span class='required'>*</span> " : ""}${clean}</label><div class="percent-field"><input class="input" type="text" placeholder="请输入${clean}" /><span>%</span></div></div>`;
  }
  const type = clean === "月度" ? "month" : dateLike ? "date" : "text";
  return `<div class="field"><label>${required ? "<span class='required'>*</span> " : ""}${clean}</label><input class="input" type="${type}" placeholder="请输入${clean}" /></div>`;
}

function projectExtraForm() {
  return `
    <div class="section-title">预算信息</div>
    <div class="form-grid">
      ${["人员人工预算/元", "直接投入预算/元", "试剂耗材/元", "折旧费预算/元", "无形资产摊销费预算/元", "设计费预算/元", "装备调试费用与实验费用预算/元", "委外研发预算/元", "其他费用预算/元"].map(formField).join("")}
    </div>
    <div class="section-title">占地面积</div>
    <div class="toolbar">
      <button class="btn blue" type="button" data-action="addArea">+ 添加</button>
    </div>
    <div class="table-wrap">
      <table><thead><tr><th>部门</th><th>占地面积</th><th>操作</th></tr></thead><tbody><tr><td>光学检测中心</td><td><input class="input" value="120.00" /></td><td><button class="btn red">删除</button></td></tr><tr><td>材料检测中心</td><td><input class="input" value="35.00" /></td><td><button class="btn red">删除</button></td></tr></tbody></table>
    </div>
  `;
}

function renderProjectDetail() {
  const p = projects.find(item => item.id === state.currentProjectId) || projects[0];
  document.querySelector("#app").innerHTML = `
    <div class="page-body">
      ${projectBaseInfo(p)}
      <div class="inner-tabs">
        <button class="${state.detailTab === "achievements" ? "is-active" : ""}" data-detail-tab="achievements">科研成果</button>
        <button class="${state.detailTab === "funds" ? "is-active" : ""}" data-detail-tab="funds">科研经费</button>
        <button class="${state.detailTab === "labor" ? "is-active" : ""}" data-detail-tab="labor">人工</button>
      </div>
      <div>${detailTabContent(p)}</div>
    </div>
    <div class="form-actions"><button class="btn" data-action="backList">返回</button><button class="btn green" data-action="editCurrent">修改</button></div>
  `;
}

function projectBaseInfo(p) {
  return `
    <div class="detail-head">
      ${[
        ["项目编号", p.id], ["项目名称", p.name], ["项目状态", p.status], ["承担部门", p.department],
        ["项目负责人", p.leader], ["项目来源", p.source], ["项目周期", `${p.start} 至 ${p.end}`], ["项目总经费", money(p.budget)],
        ["已使用经费占比", p.usedRate], ["项目所属", p.owner], ["占地面积", renderAreas(p.areas)], ["合作单位", p.partner]
      ].map(([k, v]) => `<div class="detail-item"><span>${k}</span><strong>${v}</strong></div>`).join("")}
    </div>
  `;
}

function fundBaseInfo(p) {
  return `
    <div class="detail-head fund-base">
      ${[
        ["项目编号", p.id], ["项目名称", p.name], ["项目状态", p.status],
        ["承担部门", p.department], ["项目总经费", money(p.budget)], ["已使用经费占比", p.usedRate]
      ].map(([k, v]) => `<div class="detail-item"><span>${k}</span><strong>${v}</strong></div>`).join("")}
    </div>
  `;
}

function detailTabContent(p) {
  if (state.detailTab === "achievements") {
    return `<div class="table-wrap"><table><thead><tr><th>知识产权名称</th><th>类型</th><th>状态</th><th>申请号/专利号</th><th>申请日期</th></tr></thead><tbody>${achievements.filter(r => r[9] === p.id).map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[3]}</td><td>${r[5]}</td><td>${r[6]}</td></tr>`).join("") || "<tr><td colspan='5'>暂无关联成果</td></tr>"}</tbody></table></div>`;
  }
  if (state.detailTab === "funds") {
    const row = funds.find(r => r[1] === p.id) || funds[0];
    return `<div class="table-wrap"><table class="medium-table"><thead><tr><th>总预算</th><th>已使用经费</th><th>剩余经费</th><th>剩余时间（月）</th><th>每月至少需归集</th><th>操作</th></tr></thead><tbody><tr><td>${row[9]}</td><td>${row[10]}</td><td>${row[12]}</td><td>${row[13]}</td><td>${row[15]}</td><td><button class="btn blue" data-fund-detail="${p.id}">查看明细</button></td></tr></tbody></table></div>`;
  }
  return `<div class="table-wrap"><table><thead><tr><th>姓名</th><th>角色</th><th>投入月份</th><th>备注</th></tr></thead><tbody><tr><td>${p.leader}</td><td>项目负责人</td><td>12</td><td>mock 数据</td></tr><tr><td>${p.internal.split("、")[0]}</td><td>内部成员</td><td>8</td><td>mock 数据</td></tr></tbody></table></div>`;
}

function renderFundDetail() {
  const p = projects.find(item => item.id === state.currentProjectId) || projects[0];
  document.querySelector("#app").innerHTML = `
    <div class="page-body">
      ${fundBaseInfo(p)}
      <div class="query-panel fund-detail-query">
        ${field("科目名称")}
        <div class="field">
          <label>年度</label>
          <details class="multi-select">
            <summary>2025, 2026</summary>
            <div class="multi-options">
              <label><input type="checkbox" checked /> 2025</label>
              <label><input type="checkbox" checked /> 2026</label>
            </div>
          </details>
        </div>
        <div class="query-actions">
          <button class="btn primary" data-action="search">搜索</button>
          <button class="btn" data-action="reset">重置</button>
        </div>
      </div>
      <div class="toolbar">
        <button class="btn orange" data-action="导出">⇩ 导出</button>
      </div>
      <div class="table-wrap">
        <table class="fund-detail-table">
          <thead>
            <tr><th rowspan="2">科目代码</th><th rowspan="2">科目名称</th><th rowspan="2">科目总预算（元）</th><th colspan="12">2025</th><th colspan="4">2026</th><th class="fixed-right-total" rowspan="2">合计</th></tr>
            <tr>${Array.from({ length: 12 }, (_, i) => `<th>${i + 1}月</th>`).join("")}${Array.from({ length: 4 }, (_, i) => `<th>${i + 1}月</th>`).join("")}</tr>
          </thead>
          <tbody>${detailRows.map(r => `<tr>${r.map((v, i) => i === r.length - 1 ? `<td class="fixed-right-total">${v || "-"}</td>` : cell(v)).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>
    </div>
    <div class="form-actions"><button class="btn" data-action="backList">返回</button></div>
  `;
}

function openImportModal() {
  document.querySelector("#modalTitle").textContent = "导入月度明细";
  document.querySelector("#modalBody").innerHTML = `
    <div class="modal-body">
      <div class="field">
        <label><span class="required">*</span> 月份</label>
        ${monthPicker()}
      </div>
      <div style="height:12px"></div>
      <div class="field"><label><span class="required">*</span> 附件</label><input class="file-input" type="file" /></div>
      <div class="toolbar" style="margin-top:18px">
        <button class="btn blue" data-action="downloadTemplate">下载模板</button>
        <span class="spacer"></span>
        <button class="btn primary" data-action="confirmImport">导入</button>
        <button class="btn" data-close-modal>取消</button>
      </div>
    </div>
  `;
  document.querySelector("#modal").classList.add("is-open");
  document.querySelector("#modal").setAttribute("aria-hidden", "false");
}

function openLaborMonthModal() {
  const project = projects[0];
  const members = [
    { name: project.leader, department: project.department },
    ...project.internal.split("、").map(name => ({ name, department: project.department }))
  ];
  document.querySelector("#modalTitle").textContent = "新增月度人工成本";
  document.querySelector("#modalBody").innerHTML = `
    <div class="modal-body labor-month-modal">
      <div class="form-grid modal-form-grid">
        ${formField("月度*")}
        <div class="field">
          <label><span class="required">*</span> 项目</label>
          <select class="select">
            ${projects.map(p => `<option>${p.id} ${p.name}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="table-wrap batch-labor-table">
        <table>
          <thead><tr><th>姓名</th><th>部门</th><th>项目工时占比</th></tr></thead>
          <tbody>${members.map((m, i) => `<tr><td>${m.name}</td><td>${m.department}</td><td><div class="percent-field table-percent-field"><input class="input percent-input" value="${i === 0 ? "35" : ""}" placeholder="请输入占比" /><span>%</span></div></td></tr>`).join("")}</tbody>
        </table>
      </div>
      <div class="toolbar" style="margin-top:18px">
        <span class="spacer"></span>
        <button class="btn primary" data-action="saveModal">保存</button>
        <button class="btn" data-close-modal>取消</button>
      </div>
    </div>
  `;
  const modal = document.querySelector("#modal");
  modal.classList.add("is-open", "is-wide");
  modal.setAttribute("aria-hidden", "false");
}

function openLaborFormModal() {
  const modal = document.querySelector("#modal");
  document.querySelector("#modalTitle").textContent = "新增人工成本";
  document.querySelector("#modalBody").innerHTML = `
    <div class="modal-body">
      <div class="form-grid modal-form-grid">${formFields("laborCosts").map(f => formField(f)).join("")}</div>
      <div class="toolbar" style="margin-top:18px">
        <span class="spacer"></span>
        <button class="btn primary" data-action="saveModal">保存</button>
        <button class="btn" data-close-modal>取消</button>
      </div>
    </div>
  `;
  modal.classList.add("is-open", "is-wide");
  modal.setAttribute("aria-hidden", "false");
}

function monthPicker() {
  return `
    <details class="month-picker">
      <summary id="importMonthLabel">${state.importYear}年${state.importMonth}月</summary>
      <div class="month-panel">
        <div class="month-panel-head">
          <button class="icon-button" type="button" data-month-year="-1" aria-label="上一年">‹</button>
          <strong id="importYearLabel">${state.importYear}年</strong>
          <button class="icon-button" type="button" data-month-year="1" aria-label="下一年">›</button>
        </div>
        <div class="month-grid">
          ${Array.from({ length: 12 }, (_, i) => `<button class="${state.importMonth === i + 1 ? "is-active" : ""}" type="button" data-month-select="${i + 1}">${i + 1}月</button>`).join("")}
        </div>
      </div>
    </details>
  `;
}

function refreshMonthPicker() {
  const label = document.querySelector("#importMonthLabel");
  const year = document.querySelector("#importYearLabel");
  const grid = document.querySelector(".month-grid");
  if (!label || !year || !grid) return;
  label.textContent = `${state.importYear}年${state.importMonth}月`;
  year.textContent = `${state.importYear}年`;
  grid.innerHTML = Array.from({ length: 12 }, (_, i) => `<button class="${state.importMonth === i + 1 ? "is-active" : ""}" type="button" data-month-select="${i + 1}">${i + 1}月</button>`).join("");
}

function closeModal() {
  const modal = document.querySelector("#modal");
  modal.classList.remove("is-open", "is-wide");
  modal.setAttribute("aria-hidden", "true");
}

function money(value) {
  return Number(value).toLocaleString("zh-CN", { maximumFractionDigits: 0 });
}

function toast(message) {
  const el = document.querySelector("#toast");
  el.textContent = message;
  el.classList.add("is-show");
  window.setTimeout(() => el.classList.remove("is-show"), 1600);
}

document.addEventListener("click", event => {
  const target = event.target.closest("button, [data-close-modal]");
  if (!target) return;

  if (target.dataset.page) {
    state.page = target.dataset.page;
    state.mode = "list";
    render();
    return;
  }
  if (target.dataset.viewProject) {
    state.currentProjectId = target.dataset.viewProject;
    state.page = "projects";
    state.mode = "detail";
    render();
    return;
  }
  if (target.dataset.fundDetail) {
    state.currentProjectId = target.dataset.fundDetail;
    state.page = "funds";
    state.mode = "fundDetail";
    render();
    return;
  }
  if (target.dataset.detailTab) {
    state.detailTab = target.dataset.detailTab;
    renderProjectDetail();
    return;
  }
  if (target.dataset.closeModal !== undefined) {
    closeModal();
    return;
  }
  if (target.dataset.monthYear) {
    state.importYear += Number(target.dataset.monthYear);
    refreshMonthPicker();
    return;
  }
  if (target.dataset.monthSelect) {
    state.importMonth = Number(target.dataset.monthSelect);
    refreshMonthPicker();
    document.querySelector(".month-picker")?.removeAttribute("open");
    return;
  }

  const action = target.dataset.action;
  if (!action) return;
  if (action === "新增") {
    if (state.page === "laborCosts") {
      openLaborFormModal();
    } else if (state.page === "areas" || state.page === "sources") {
      openFormModal(state.page);
    } else {
      state.mode = "form";
      render();
    }
  } else if (action === "修改" && state.page === "laborCosts") {
    openLaborFormModal();
    toast("已打开修改弹窗（原型沿用新增结构）");
  } else if (action === "修改" && (state.page === "areas" || state.page === "sources")) {
    openFormModal(state.page);
    toast("已打开修改弹窗（原型沿用新增结构）");
  } else if (action === "修改" || action === "editCurrent") {
    state.mode = "form";
    render();
    toast("已打开修改页（原型沿用表单结构）");
  } else if (action === "取消" || action === "backList") {
    state.mode = "list";
    render();
  } else if (action === "save") {
    state.mode = "list";
    render();
    toast("保存成功（mock）");
  } else if (action === "saveModal") {
    closeModal();
    toast("保存成功（mock）");
  } else if (action === "导入月度明细") {
    openImportModal();
  } else if (action === "新增月度数据") {
    openLaborMonthModal();
  } else if (action === "addArea") {
    toast("已添加一行占地面积（mock）");
  } else if (action === "confirmImport") {
    closeModal();
    toast("导入完成：重复数据将提示覆盖确认（mock）");
  } else {
    toast(`${target.textContent.trim()} 已触发（mock）`);
  }
});

render();
