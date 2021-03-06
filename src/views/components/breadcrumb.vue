<style>
    .demo-breadcrumb-separator{
        color: #ff5500;
        padding: 0 5px;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Breadcrumb 面包屑</h1>
            <Anchor title="概述" h2></Anchor>
            <p>显示网站的层级结构，告知用户当前所在位置，以及在需要向上级导航时使用。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Breadcrumb>
                        <Breadcrumb-item href="/">Home</Breadcrumb-item>
                        <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>
                        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div slot="desc">
                    <p>最基础的用法，通过设置<code>href</code>属性添加链接。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="带图标的">
                <div slot="demo">
                    <Breadcrumb>
                        <Breadcrumb-item href="/">
                            <Icon type="ios-home-outline"></Icon> Home
                        </Breadcrumb-item>
                        <Breadcrumb-item href="/components/breadcrumb">
                            <Icon type="social-buffer-outline"></Icon> Components
                        </Breadcrumb-item>
                        <Breadcrumb-item>
                            <Icon type="pound"></Icon> Breadcrumb
                        </Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div slot="desc">
                    <p>可自定义每项的内容，比如带有一个图标。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.icon }}</i-code>
            </Demo>
            <Demo title="分隔符">
                <div slot="demo">
                    <Breadcrumb separator=">">
                        <Breadcrumb-item href="/">Home</Breadcrumb-item>
                        <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>
                        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
                    </Breadcrumb>
                    <Breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
                        <Breadcrumb-item href="/">Home</Breadcrumb-item>
                        <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>
                        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div slot="desc">
                    <p>通过设置<code>separator</code>属性来自定义分隔符，比如<code> > </code>，也可以接受自定义的HTML字符串。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.separator }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Breadcrumb props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>separator</td>
                            <td>自定义分隔符</td>
                            <td>String | Element String</td>
                            <td>/</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="BreadcrumbItem props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>href</td>
                            <td>链接，不传则没有链接</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/breadcrumb';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor
        },
        data () {
            return {
                code: Code
            }
        }
    }
</script>