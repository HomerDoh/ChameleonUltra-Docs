import { GithubInfo } from "fumadocs-ui/components/github-info";
import Link from "next/link";

<GithubInfo
  owner="fuma-nama"
  repo="fumadocs"
  // your own GitHub access token (optional)
  token={process.env.GITHUB_TOKEN}
/>;

import { File, Folder, Files } from "fumadocs-ui/components/files";

<Files>
  <Folder name="app" defaultOpen>
    <Link href="/dashboard"  type="">
      <File name="layout.tsx"></File>
    </Link>

    <File name="page.tsx" />
    <File name="global.css" />
  </Folder>
  <Folder name="components">
    <File name="button.tsx" />
    <File name="tabs.tsx" />
    <File name="dialog.tsx" />
  </Folder>
  <File name="package.json" />
</Files>;
