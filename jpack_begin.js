define(["require", "module", "exports"], function(require, module, exports) {
    main.consumes = ["ext"];
    main.provides = ["apf"]
    return main;

    function main(options, imports, register) {
        imports.ext.on("register", function(e) {
            apf.nameserver.register("all", e.plugin.name, e.plugin)
        });
        imports.ext.on("unregister", function(e) {
            apf.nameserver.remove("all", e.plugin)
        });