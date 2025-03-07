import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { GithubInfo } from "fumadocs-ui/components/github-info";
import Image from "next/image";
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  i18n: true,
  nav: {
    // transparentMode: 'top',
    title: (
      <>
        <Image src="/image/logo.png" alt="logo" width={24} height={24} />
        变色龙文档
      </>
    ),
  },
  links: [
    {
      type: "custom",
      children: (
        <GithubInfo
          owner="RfidResearchGroup"
          repo="ChameleonUltra"
          className="lg:-mx-2"
        />
      ),
    },
  ],
};
