// src/pages/account-book/index.jsx
import React, { useState } from "react";
import { View } from "@tarojs/components";
import {
  AtButton,
  AtInput,
  AtList,
  AtListItem,
  AtCard,
  AtToast,
} from "taro-ui";
import "./index.scss";

const AccountBook = () => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income"); // 支出或收入
  const [note, setNote] = useState("");
  const [records, setRecords] = useState([]); // 记录列表
  const [toastMessage, setToastMessage] = useState(""); // Toast 消息
  const [isToastVisible, setIsToastVisible] = useState(false); // Toast 可见性

  const handleAddRecord = () => {
    if (amount && note) {
      const newRecord = {
        id: Date.now(), // 使用时间戳作为唯一标识符
        amount,
        type,
        note,
      };
      setRecords([...records, newRecord]); // 添加新的记录到列表
      // 清空输入框
      setAmount("");
      setNote("");
    } else {
      // 设置 Toast 提示消息
      setToastMessage("请填写金额和备注");
      setIsToastVisible(true);
    }
  };

  // 关闭 Toast
  const handleToastClose = () => {
    setIsToastVisible(false);
  };

  return (
    <View className="account-book">
      <AtCard title="记账本" extra="新增记录">
        <AtInput
          name="amount"
          title="金额"
          type="number"
          placeholder="请输入金额"
          value={amount}
          onChange={(value) => setAmount(value)}
        />

        <View className="type-select">
          <View>
            <AtButton
              type={type === "income" ? "success" : "default"}
              onClick={() => setType("income")}
            >
              收入
            </AtButton>
            <AtButton
              type={type === "expense" ? "error" : "default"}
              onClick={() => setType("expense")}
            >
              支出
            </AtButton>
          </View>
        </View>

        <AtInput
          name="note"
          title="备注"
          placeholder="请输入备注"
          value={note}
          onChange={(value) => setNote(value)}
        />

        <AtButton type="primary" onClick={handleAddRecord}>
          添加记录
        </AtButton>
      </AtCard>

      {records.length > 0 && (
        <AtCard title="记账记录">
          <AtList>
            {records.map((record) => (
              <AtListItem
                key={record.id}
                title={`金额: ${record.amount}`}
                note={` 备注: ${record.note}`}
                extraText={record.type === "income" ? "收入" : "支出"}
              />
            ))}
          </AtList>
        </AtCard>
      )}

      {/* Toast 提示框 */}
      <AtToast
        isOpen={isToastVisible}
        text={toastMessage}
        onClose={handleToastClose}
      />
    </View>
  );
};

export default AccountBook;
