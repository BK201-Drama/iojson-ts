/*
 * important: this packages can use in frontend, not backend
 *
 * it will be use in backend in the future
 *
 */

/*
 * Object is forbidden
 * object is real type
 */
type Json = object[] | object;

/*
 * Export JSON
 * 修改iojson依赖使其能过ts的编译，并将两个功能放到util中
 * 直接引入iojson会有ts编译不通过的问题
 */
export function exportJSON(data: Json, filename: string) {
  const link: HTMLAnchorElement = document.createElement('a');
  let _filename = filename || `${Date.now()}.json`;
  if (!/\.json$/.test(_filename)) {
    _filename += '.json';
  }

  link.download = filename;
  link.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));
  link.click();
  link.remove();
  return data;
}

/*
 * Import JSON
 * 修改iojson依赖使其能过ts的编译，并将两个功能放到util中
 * 直接引入iojson会有ts编译不通过的问题
 */
export function importJSON() {
  return new Promise((resolve, reject) => {
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'file';
    input.onchange = (event: Event) => {
      const [file] = (event.target as any).files || [];
      if (!file) {
        input.remove();
        reject(new Error('No files'));
      }

      const reader: FileReader = new FileReader();
      // 不要和上面的event重叠导致eslint错误
      reader.onload = (ev: Event) => {
        try {
          const config = JSON.parse((ev.target as any).result);
          resolve(config);
        } catch (e) {
          reject(e);
        }
        input.remove();
      };
      reader.readAsText(file);
    };

    input.click();
  });
}

export default {
  exportJSON,
  importJSON,
};
