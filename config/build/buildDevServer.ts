import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {BuildOptions} from "./types/types";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port ?? 8080,
        open: true,
        historyApiFallback: true, // на проде проксировать через index.html
        hot: true
    }
}