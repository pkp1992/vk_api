var View = {
    render(templateName, model) { // имя шаблона, данные
        templateName = templateName + 'Template';

        Handlebars.registerHelper('if_eq', function (a, b, opts) {
            if (a == b) {
                return opts.fn(this);
            } else {
                return opts.inverse(this);
            }
        });

        var templateElement = document.getElementById(templateName),
            templateSource = templateElement.innerHTML,
            renderFn = Handlebars.compile(templateSource);

        return renderFn(model);
    }
};

// задача - отображение данных