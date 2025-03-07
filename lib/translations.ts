import { type Translations } from "fumadocs-ui/i18n";

const cn: Partial<Translations> = {
  search: "搜索",
  searchNoResult: "没有找到结果",
  toc: "目录",
  tocNoHeadings: "没有找到目录",
  lastUpdate: "最后更新",
  chooseLanguage: "选择语言",
  nextPage: "下一页",
  previousPage: "上一页",
  chooseTheme: "选择主题",
  editOnGithub: "在 GitHub 上编辑",
};

const en: Partial<Translations> = {
  search: "Search",
  // other translations
};

const Translations = {
  cn,
  en,
};

export default Translations;
