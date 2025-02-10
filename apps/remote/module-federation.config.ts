import { ModuleFederationOptions } from "@module-federation/rsbuild-plugin";

export const mfConfig: ModuleFederationOptions = {
  name: "remote",
  filename: "remoteEntry.js",
  exposes: {
    "./RemoteEntry": "./src/remote-entry.tsx"
  }
};
