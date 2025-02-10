import { defineConfig, RsbuildPlugin } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { mfConfig } from "./module-federation.config";
import { withZephyr } from "zephyr-rspack-plugin";

const pluginWithZephyr = (): RsbuildPlugin => {
  return {
    name: "zephyr-rsbuild-plugin",
    setup: (api) => {
      api.modifyRspackConfig(async (config, { mergeConfig }) => {
        const zephyrConfig = await withZephyr()(config);
        mergeConfig(zephyrConfig);
      });
    }
  };
};

export default defineConfig({
  plugins: [pluginReact(), pluginWithZephyr(), pluginModuleFederation(mfConfig)]
});
