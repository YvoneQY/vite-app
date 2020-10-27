

可以用 /deep/或::v-deep
在vue3.0的环境下，使用/deep/时，编译会报错

::v-deep .a{
 ***
}

/deep/ .a {
 ***
}

.a >>> .b {
 ***
}

